package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/algolia/algoliasearch-client-go/v3/algolia/search"
	"github.com/mmcdole/gofeed"
)

type Post struct {
	*gofeed.Item

	ObjectID string `json:"objectID"`
}

var url = flag.String("url", "", "")

func main() {
	flag.Parse()
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(*url)
	var posts []Post
	for _, v := range feed.Items {
		fmt.Println(v.Title)
		fmt.Println(v.GUID)
		fmt.Println(v.PublishedParsed)
		posts = append(posts, Post{Item: v, ObjectID: v.GUID})

	}
	client := search.NewClient("", "")
	index := client.InitIndex("test_v1")
	_, err := index.SaveObjects(posts)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println(feed.Title)
}
