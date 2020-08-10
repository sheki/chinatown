package search

import (
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"strings"

	_ "chinatown.sheki/server/search/statik"
	"github.com/algolia/algoliasearch-client-go/v3/algolia/opt"
	"github.com/algolia/algoliasearch-client-go/v3/algolia/search"
	"github.com/rakyll/statik/fs"
	"github.com/spf13/viper"
)

var templ *template.Template

func Register(router *http.ServeMux) error {
	statikFS, err := fs.New()
	if err != nil {
		return err
	}

	f, err := statikFS.Open("/index.html")
	if err != nil {
		return fmt.Errorf("could not open index.html: %w", err)
	}
	b, err := ioutil.ReadAll(f)
	if err != nil {
		return fmt.Errorf("error reading file: %w", err)
	}
	templ, err = template.New("name").Parse(string(b))
	if err != nil {
		return fmt.Errorf("template parse error: %W", err)
	}

	router.HandleFunc("/", httpHandler)
	return nil
}

type templateData struct {
	Query string
	Hits  []Hit
}

func httpHandler(w http.ResponseWriter, r *http.Request) {
	keys, ok := r.URL.Query()["q"]
	query := ""
	if ok {
		query = strings.Join(keys, " ")
	}
	t := templateData{Query: query}

	if query != "" {
		client := search.NewClient(viper.GetString("algolia_id"), viper.GetString("algolia_search_key"))
		index := client.InitIndex("prod_v5")

		params := []interface{}{
			opt.AttributesToRetrieve("title", "link", "content"),
			opt.AttributesToSnippet(
				"content:80",
			),
		}
		res, err := index.Search(query, params...)
		if err != nil {
			log.Println(err)
		}
		var responseHits []ResponseHit
		err = res.UnmarshalHits(&responseHits)
		if err != nil {
			log.Println(err)
		}

		var hits []Hit
		for _, v := range responseHits {
			hits = append(hits, ConvertToHit(v))
			log.Println(ConvertToHit(v))
		}
		t.Hits = hits
	}

	err := templ.Execute(w, t)
	if err != nil {
		log.Fatal(err)
	}
}
