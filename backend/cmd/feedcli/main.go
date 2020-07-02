package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/algolia/algoliasearch-client-go/v3/algolia/search"
	"github.com/mmcdole/gofeed"
	"github.com/spf13/viper"
)

type Post struct {
	*gofeed.Item

	ObjectID string `json:"objectID"`
}

var url = flag.String("url", "", "")

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
	fp := gofeed.NewParser()
	feed, _ := fp.ParseURL(*url)
	var posts []Post
	for _, v := range feed.Items {
		fmt.Println(v.Title)
		fmt.Println(v.GUID)
		fmt.Println(v.PublishedParsed)
		posts = append(posts, Post{Item: v, ObjectID: v.GUID})

	}
	client := search.NewClient(viper.GetString("algolia_id"), viper.GetString("algolia_key"))
	index := client.InitIndex("test_v1")
	_, err = index.SaveObjects(posts)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println(feed.Title)
}
