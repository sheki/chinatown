package main

import (
	"bufio"
	"flag"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	"github.com/algolia/algoliasearch-client-go/v3/algolia/search"
	"github.com/mmcdole/gofeed"
	"github.com/spf13/viper"
)

type Post struct {
	*gofeed.Item

	ObjectID string `json:"objectID"`
}

var urlFile = flag.String("urlfile", "", "")

func readURLFile(filepath string) chan string {
	ch := make(chan string)
	go func() {
		file, err := os.Open(filepath)
		if err != nil {
			log.Fatal(err)
		}
		defer file.Close()
		defer close(ch)

		scanner := bufio.NewScanner(file)
		for scanner.Scan() {
			ch <- scanner.Text()
		}

		if err := scanner.Err(); err != nil {
			log.Fatal(err)
		}
	}()
	return ch
}

func main() {

	viper.SetConfigName("config") // name of config file (without extension)
	viper.SetConfigType("toml")   // REQUIRED if the config file does not have the extension in the name
	viper.AddConfigPath("$HOME/") // call multiple times to add many search paths
	viper.AddConfigPath(".")

	err := viper.ReadInConfig() // Find and read the config file
	if err != nil {             // Handle errors reading the config file
		panic(fmt.Errorf("Fatal error config file: %s \n", err))
	}

	flag.Parse()
	urlsCh := readURLFile(*urlFile)
	output := make(chan []*Post)
	go getFeed(urlsCh, output)
	writeToAlgolia(output)

}

func writeToAlgolia(postsCh chan []*Post) {
	for posts := range postsCh {
		go func(posts []*Post) {
			client := search.NewClient(viper.GetString("algolia_id"), viper.GetString("algolia_key"))
			index := client.InitIndex("prod_v3")
			_, err := index.SaveObjects(posts)
			fmt.Print(".")
			if err != nil {
				log.Println(err)
			}
		}(posts)
	}
}

func getFeed(urlsCh chan string, output chan []*Post) {
	var wg sync.WaitGroup
	defer close(output)
	for url := range urlsCh {
		wg.Add(1)
		go func(url string) {
			defer wg.Done()
			fp := gofeed.NewParser()
			feed, err := fp.ParseURL(url)
			if err != nil {
				log.Println(url, err)
				return
			}
			var posts []*Post
			feedlink := feed.FeedLink
			if feedlink == "" {
				feedlink = url
			}
			for _, v := range feed.Items {
				suffix := v.Title
				if v.PublishedParsed != nil {
					suffix = v.PublishedParsed.Format(time.RFC3339)
				}

				id := fmt.Sprintf("%s:%s", feedlink, suffix)
				posts = append(posts, &Post{Item: v, ObjectID: id})
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
