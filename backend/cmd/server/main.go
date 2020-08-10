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
	"github.com/spf13/viper"
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
	logger := log.New(os.Stdout, "http: ", log.LstdFlags)
	viper.SetConfigName("config") // name of config file (without extension)
	viper.SetConfigType("toml")   // REQUIRED if the config file does not have the extension in the name
	viper.AddConfigPath("$HOME/") // call multiple times to add many search paths
	viper.AddConfigPath(".")

	err := viper.ReadInConfig() // Find and read the config file
	if err != nil {             // Handle errors reading the config file
		logger.Fatal("Could not open config", err)
	}
	flag.Parse()
	router := http.NewServeMux()
	chinatown.Register(router)
	err = search.Register(router)
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
		logger.Fatal("Could not listen", err)
	}
}
