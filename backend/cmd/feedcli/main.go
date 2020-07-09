package main

import (
	"flag"

	"chinatown.sheki/server/indexer"
	"github.com/spf13/viper"
)

var urlFile = flag.String("urlfile", "", "")

func main() {

	viper.SetConfigName("config") // name of config file (without extension)
	viper.SetConfigType("toml")   // REQUIRED if the config file does not have the extension in the name
	viper.AddConfigPath("$HOME/") // call multiple times to add many search paths
	viper.AddConfigPath(".")

	err := viper.ReadInConfig() // Find and read the config file
	if err != nil {             // Handle errors reading the config file
		panic(err)
	}

	flag.Parse()
	indexer.Run(viper.GetString("db_path"), *urlFile)

}
