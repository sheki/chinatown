package indexer

import (
	"bufio"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"os"
	"strings"
	"sync"
	"time"

	"crawshaw.io/sqlite/sqlitex"
	"github.com/algolia/algoliasearch-client-go/v3/algolia/search"
	"github.com/mmcdole/gofeed"
	"github.com/spf13/viper"
)

// Run the indexer—insert urls from the file into db, fetch and store feeds from db
func Run(dbpath string, urlFile string) error {
	urls, err := readURLFile(urlFile)
	if err != nil {
		return err
	}
	db := openSqlite(dbpath)
	defer db.Close()
	if err := syncUrls(db, urls); err != nil {
		return err
	}
	allURLs, err := getAllURLs(db)
	output := make(chan []*Post)

	go getFeed(allURLs, output)
	writeToAlgoliaAndDB(db, output)
	return syncUrls(db, urls)

}

func getAllURLs(db *sqlitex.Pool) ([]URL, error) {
	conn := db.Get(context.TODO())
	if conn == nil {
		return nil, errors.New("no connection")
	}
	defer db.Put(conn)
	stmt := conn.Prep("SELECT feed_urls_id, url FROM feed_urls")
	var result []URL
	for {
		if hasRow, err := stmt.Step(); err != nil {
			return nil, err
		} else if !hasRow {
			break
		}
		id := stmt.GetInt64("feed_urls_id")
		url := stmt.GetText("url")
		result = append(result, URL{FeedURLID: id, URL: url})
	}
	return result, nil
}

func syncUrls(db *sqlitex.Pool, urls []string) error {
	conn := db.Get(context.TODO())
	if conn == nil {
		return errors.New("connection nil")
	}
	defer db.Put(conn)

	writeConn := db.Get(context.TODO())
	if writeConn == nil {
		return errors.New("connection nil")
	}
	defer db.Put(writeConn)

	for _, url := range urls {
		url = strings.TrimSpace(url)
		if url == "" {
			continue
		}
		stmt := conn.Prep("SELECT feed_urls_id FROM feed_urls WHERE url = $url;")

		stmt.SetText("$url", url)
		hasRow, err := stmt.Step()
		if err != nil {
			stmt.Finalize()

			return err
		}
		if hasRow {
			stmt.Finalize()

			continue
		}

		stmt.Finalize()

		err = sqlitex.Exec(writeConn, "INSERT INTO feed_urls (url) VALUES (?);", nil, url)
		if err != nil {
			return err
		}
	}

	return nil
}

func openSqlite(path string) *sqlitex.Pool {
	path = fmt.Sprintf("file:%s", path)
	dbpool, err := sqlitex.Open(path, 0, 10)
	if err != nil {
		log.Fatal(err)
	}
	return dbpool
}

func writeToAlgoliaAndDB(db *sqlitex.Pool, postsCh chan []*Post) {
	for posts := range postsCh {
		go func(posts []*Post) {
			writeConn := db.Get(context.TODO())

			if writeConn == nil {
				log.Println("DB conn missing")
				return
			}
			defer db.Put(writeConn)

			for _, p := range posts {
				postJSON, err := json.Marshal(true)
				if err != nil {
					log.Println(err)
				}
				err = sqlitex.Exec(writeConn, "INSERT  OR IGNORE INTO feed_posts (feed_posts_id, feed_urls_id, post) VALUES (?, ?, ?);", nil, p.ObjectID, p.URLID, postJSON)
				if err != nil {
					log.Println(err)
					return
				}
			}

			client := search.NewClient(viper.GetString("algolia_id"), viper.GetString("algolia_key"))
			index := client.InitIndex("prod_v5")
			_, err := index.SaveObjects(posts)
			fmt.Print(".")
			if err != nil {
				log.Println(err)
			}
		}(posts)
	}
}

func getFeed(urls []URL, output chan []*Post) {
	var wg sync.WaitGroup
	defer close(output)
	for _, url := range urls {
		wg.Add(1)
		go func(url URL) {
			defer wg.Done()
			fp := gofeed.NewParser()
			feed, err := fp.ParseURL(url.URL)
			if err != nil {
				log.Println(url, err)
				return
			}
			var posts []*Post

			for _, v := range feed.Items {
				suffix := v.Title
				if v.PublishedParsed != nil {
					suffix = v.PublishedParsed.Format(time.RFC3339)
				}

				id := fmt.Sprintf("%d:%s", url.FeedURLID, suffix)
				posts = append(posts, &Post{Item: v, ObjectID: id, URLID: url.FeedURLID})
				if len(posts) > 5 {
					output <- posts
					posts = nil
				}
			}
			output <- posts
		}(url)
	}
	wg.Wait()
}

func readURLFile(filepath string) ([]string, error) {
	var urls []string

	file, err := os.Open(filepath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		urls = append(urls, scanner.Text())
	}
	err = scanner.Err()
	return urls, err
}

type Post struct {
	*gofeed.Item

	ObjectID string `json:"objectID"` // algolia need this forma

	URLID int64 `json:"urlID"`
}

type URL struct {
	FeedURLID int64
	URL       string
}
