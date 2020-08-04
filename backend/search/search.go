package search

import (
	"log"
	"net/http"

	_ "chinatown.sheki/server/search/statik"
	"github.com/rakyll/statik/fs"
)

func Register(router *http.ServeMux) {
	statikFS, err := fs.New()
	if err != nil {
		log.Fatal(err)
	}

	router.Handle("/public/", http.StripPrefix("/public/", http.FileServer(statikFS)))
}
