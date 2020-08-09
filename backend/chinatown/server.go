package chinatown

import (
	"encoding/json"
	"net/http"
)

var state = NewState()

func handler(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(state)
}

type ownershipRequest struct {
	Player     string
	TileNumber int
}

func setOwnership(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	var o ownershipRequest
	json.NewDecoder(r.Body).Decode(&o)
	state.SetOwnership(o.TileNumber, o.Player)
	state.WriteJSON(w)
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
	state.WriteJSON(w)
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
	state.WriteJSON(w)
}

type registerPlayerRequest struct {
	Name string
}

func registerPlayer(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	var p registerPlayerRequest
	json.NewDecoder(r.Body).Decode(&p)
	state.RegisterPlayer(p.Name)
	state.WriteJSON(w)
}

func endTurn(w http.ResponseWriter, r *http.Request) {
	state.EndYear()
	json.NewEncoder(w).Encode(state)
}

type setTileRequest struct {
	Number int
	Shop   string
}

func setTile(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	var p setTileRequest
	json.NewDecoder(r.Body).Decode(&p)
	state.SetTile(ShopOfString(p.Shop), p.Number)
	state.WriteJSON(w)
}

type addTileReq struct {
	Player string
	Shop   string
	Count  int
}

func addTileCount(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()
	var p addTileReq
	json.NewDecoder(r.Body).Decode(&p)
	state.SetShopCount(p.Player, ShopOfString(p.Shop), p.Count)
	state.WriteJSON(w)
}

func resetHandler(w http.ResponseWriter, r *http.Request) {
	state = NewState()
	state.WriteJSON(w)
}

func endYear(w http.ResponseWriter, _ *http.Request) {
	state.EndYear()
	state.WriteJSON(w)
}

func Register(router *http.ServeMux) {
	router.HandleFunc("/state", handler)
	router.HandleFunc("/endTurn", endTurn)
	router.HandleFunc("/returnTile", returnTile)
	router.HandleFunc("/addMoney", addMoney)
	router.HandleFunc("/setOwnership", setOwnership)
	router.HandleFunc("/registerPlayer", registerPlayer)
	router.HandleFunc("/addTileCount", addTileCount)
	router.HandleFunc("/setTile", setTile)
	router.HandleFunc("/endYear", endYear)
	router.HandleFunc("/reset", resetHandler)
}
