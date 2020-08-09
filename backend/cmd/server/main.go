package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"chinatown.sheki/server/chinatown"
	"chinatown.sheki/server/search"

	"github.com/rs/cors"
)

func logging(logger *log.Logger) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			defer func() {
				logger.Println(r.Method, r.URL.Path, r.RemoteAddr, r.UserAgent())
			}()
			next.ServeHTTP(w, r)
		})
	}
}

var port = flag.Int("port", 8080, "port")

func main() {
	flag.Parse()
	logger := log.New(os.Stdout, "http: ", log.LstdFlags)
	router := http.NewServeMux()
	chinatown.Register(router)
	err := search.Register(router)
	if err != nil {
		log.Fatal(err)
	}
	cors := cors.Default().Handler(router)
	server := &http.Server{
		Addr:         fmt.Sprintf(":%d", *port),
		Handler:      logging(logger)(cors),
		ErrorLog:     logger,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  15 * time.Second,
	}
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		logger.Fatalf("Could not listen", err)
	}
}
