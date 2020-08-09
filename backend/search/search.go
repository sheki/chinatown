package search

import (
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"strings"

	_ "chinatown.sheki/server/search/statik"
	"github.com/rakyll/statik/fs"
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
}

func httpHandler(w http.ResponseWriter, r *http.Request) {
	keys, ok := r.URL.Query()["q"]
	query := ""
	if ok {
		query = strings.Join(keys, " ")
	}
	t := templateData{Query: query}

	err := templ.Execute(w, t)
	if err != nil {
		log.Fatal(err)
	}
}
