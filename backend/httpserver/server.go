package httpserver

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"

	_ "github.com/motemen/go-loghttp/global" // Just this line!
)

var state = NewState()

func handler(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(state)
}

type ownershipRequest struct {
	Player     string
	Shop       string
	TileNumber int
}

func setOwnership(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	var o ownershipRequest
	json.NewDecoder(r.Body).Decode(&o)
	state.SetOwnership(o.TileNumber, o.Player, o.Shop)
	json.NewEncoder(w).Encode(state)
}

type moneyRequest struct {
	Money  int
	Player string
}

func addMoney(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	var m moneyRequest
	json.NewDecoder(r.Body).Decode(&m)
	state.AddMoney(m.Player, m.Money)
	json.NewEncoder(w).Encode(state)
}

type returnTilesRequest struct {
	Tiles  []int
	Player string
}

func returnTile(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	var t returnTilesRequest
	json.NewDecoder(r.Body).Decode(&t)
	state.ReturnTiles(t.Player, t.Tiles)
	json.NewEncoder(w).Encode(state)
}

func endTurn(w http.ResponseWriter, r *http.Request) {
	state.EndYear()
	json.NewEncoder(w).Encode(state)
}

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

func Run() {
	logger := log.New(os.Stdout, "http: ", log.LstdFlags)
	router := http.NewServeMux()
	router.HandleFunc("/state", handler)
	router.HandleFunc("/endTurn", endTurn)
	router.HandleFunc("/returnTile", returnTile)
	router.HandleFunc("/addMoney", addMoney)
	router.HandleFunc("/setOwnership", setOwnership)
	server := &http.Server{
		Addr:         ":8080",
		Handler:      logging(logger)(router),
		ErrorLog:     logger,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		IdleTimeout:  15 * time.Second,
	}
	http.HandleFunc("/", handler)
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		logger.Fatalf("Could not listen")
	}
}
