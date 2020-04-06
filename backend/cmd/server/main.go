package main

import (
	"flag"

	"chinatown.sheki/server/httpserver"
)

var port = flag.Int("port", 8080, "port")

func main() {
	flag.Parse()
	httpserver.Run(*port)
}
