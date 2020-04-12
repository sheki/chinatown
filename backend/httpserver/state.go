package httpserver

import (
	"encoding/json"
	"io"
	"log"
	"math/rand"
	"sync"
	"time"
)

type State struct {
	Version         int
	Players         PlayerNames
	Year            int
	Phase           TurnPhase
	TilesAllocation *TilesAllocation
	Money           MoneyAllocation
	Ownership       []*TileOwnership
	ShopAllocation  map[string]map[Shop]int

	mutex *sync.RWMutex
	shops []Shop
	tiles []int
}

type TileOwnership struct {
	TileNumber       int
	Player           string
	Shop             Shop
	unrevealedPlayer string
}

func (t *TileOwnership) reveal() {
	if t.unrevealedPlayer != "" && t.Player == "" {
		t.Player = t.unrevealedPlayer
		t.unrevealedPlayer = ""
	}
}

type TurnPhase string

const (
	PickTiles          TurnPhase = "PickTiles"
	OpenMarket                   = "OpenMarket"
	PlayerRegistration           = "PlayerRegistration"
)

type MoneyAllocation struct {
	PlayerOne   int
	PlayerTwo   int
	PlayerThree int
	PlayerFour  int
}

type TilesAllocation struct {
	PlayerOne   []int
	PlayerTwo   []int
	PlayerThree []int
	PlayerFour  []int
}

func (t *TilesAllocation) AllReturned() bool {
	return len(t.PlayerOne) == 0 && len(t.PlayerTwo) == 0 && len(t.PlayerThree) == 0 && len(t.PlayerFour) == 0
}

func NewState() *State {
	var tiles []int
	var towns []*TileOwnership
	rand.Seed(time.Now().UnixNano())
	for i := 1; i <= 85; i++ {
		tiles = append(tiles, i)
		towns = append(towns, &TileOwnership{i, "", "", ""})
	}
	shops := map[string]map[Shop]int{
		"PlayerOne":   NewShopMap(),
		"PlayerTwo":   NewShopMap(),
		"PlayerThree": NewShopMap(),
		"PlayerFour":  NewShopMap(),
	}
	s := &State{
		Year:      0,
		tiles:     tiles,
		mutex:     &sync.RWMutex{},
		Ownership: towns,
		Money: MoneyAllocation{
			PlayerOne:   50000,
			PlayerTwo:   50000,
			PlayerThree: 50000,
			PlayerFour:  50000,
		},
		ShopAllocation: shops,
		shops:          InitialShops(),
	}
	return s
}

var tileRounds = []int{6, 5, 5, 5, 5, 5}

func (s *State) EndYear() {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	if s.Year <= 6 {
		s.incrementVersion()
		s.Year += 1
		log.Println("after year=", s.Year)
		s.dealCards()
	}
}

func (s *State) AddMoney(player string, money int) {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	if s.Year <= 6 {
		s.incrementVersion()
		switch player {
		case "PlayerOne":
			s.Money.PlayerOne += money
		case "PlayerTwo":
			s.Money.PlayerTwo += money
		case "PlayerThree":
			s.Money.PlayerThree += money
		case "PlayerFour":
			s.Money.PlayerFour += money
		}
	}
}

func (s *State) SetOwnership(tileNumber int, player string) {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	log.Println("ReturnTiles tileNumber=", tileNumber, "player=", player)
	if s.Year <= 6 && tileNumber <= 85 && tileNumber > 0 {
		s.incrementVersion()
		switch player {
		case "PlayerOne":
			s.Ownership[tileNumber-1].Player = "PlayerOne"
		case "PlayerTwo":
			s.Ownership[tileNumber-1].Player = "PlayerTwo"
		case "PlayerThree":
			s.Ownership[tileNumber-1].Player = "PlayerThree"
		case "PlayerFour":
			s.Ownership[tileNumber-1].Player = "PlayerFour"
		}
	}
}

func arrRemove(a []int, b []int) []int {
	var result []int
	for _, v := range a {
		present := false
		for _, vv := range b {
			if vv == v {
				present = true
				break
			}
		}
		if present {
			continue
		}
		result = append(result, v)
	}
	return result
}

func (s *State) markUnrevealed(tiles []int, player string) {
	for _, v := range tiles {
		s.Ownership[v-1].unrevealedPlayer = player
	}
}

func (s *State) revealTiles() {
	for _, v := range s.Ownership {
		v.reveal()
	}
}

func (s *State) ReturnTiles(player string, tiles []int) {
	log.Println("ReturnTiles player=", player, "tiles=", tiles)
	s.mutex.Lock()
	defer s.mutex.Unlock()
	if s.Year <= 6 {
		s.incrementVersion()
		switch player {
		case "PlayerOne":
			s.markUnrevealed(arrRemove(s.TilesAllocation.PlayerOne, tiles), "PlayerOne")
			s.TilesAllocation.PlayerOne = nil
		case "PlayerTwo":
			s.markUnrevealed(arrRemove(s.TilesAllocation.PlayerTwo, tiles), "PlayerTwo")
			s.TilesAllocation.PlayerTwo = nil
		case "PlayerThree":
			s.markUnrevealed(arrRemove(s.TilesAllocation.PlayerThree, tiles), "PlayerThree")
			s.TilesAllocation.PlayerThree = nil
		case "PlayerFour":
			s.markUnrevealed(arrRemove(s.TilesAllocation.PlayerFour, tiles), "PlayerFour")
			s.TilesAllocation.PlayerFour = nil
		default:
			panic("WTF")
		}
		s.tiles = append(s.tiles, tiles...)
		if s.TilesAllocation.AllReturned() {
			s.Phase = OpenMarket
			s.dealShops()
			s.revealTiles()
		}
	}
}

func (s *State) dealCards() {
	s.Phase = PickTiles
	var result [][]int
	tiles := s.tiles
	num := tileRounds[s.Year-1]
	for i := 0; i < 4; i++ {
		log.Println("num=", num)
		var r int
		var arr []int
		for j := 0; j < num; j++ {
			r, tiles = pickRandom(tiles)
			arr = append(arr, r)
		}
		result = append(result, arr)
	}
	allocation := &TilesAllocation{
		PlayerOne:   result[0],
		PlayerTwo:   result[1],
		PlayerThree: result[2],
		PlayerFour:  result[3],
	}
	s.TilesAllocation = allocation
	s.tiles = tiles
}

func (s *State) dealShops() {
	shops := s.shops
	toGive := ShopAllocation[s.Year-1]
	players := []string{"PlayerOne", "PlayerTwo", "PlayerThree", "PlayerFour"}
	for _, p := range players {
		for j := 0; j < toGive; j++ {
			var sh Shop
			sh, shops = pickRandomShop(shops)
			v := s.ShopAllocation[p][sh]
			s.ShopAllocation[p][sh] = v + 1
		}
		log.Println("Shops=", s.ShopAllocation[p], "player=", p)
	}
	s.shops = shops
}

func pickRandom(slice []int) (int, []int) {
	s := rand.Intn(len(slice))
	pick := slice[s]
	ret := append(slice[:s], slice[s+1:]...)
	return pick, ret
}

func pickRandomShop(slice []Shop) (Shop, []Shop) {
	s := rand.Intn(len(slice))
	pick := slice[s]
	ret := append(slice[:s], slice[s+1:]...)
	return pick, ret
}

func (s *State) incrementVersion() {
	s.Version += 1
}

func (s *State) RegisterPlayer(name string) {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	if s.Year > 0 {
		return
	}
	s.incrementVersion()

	if s.Players.PlayerOne == "" {
		s.Players.PlayerOne = name
		return
	}
	if s.Players.PlayerTwo == "" {
		s.Players.PlayerTwo = name
		return
	}
	if s.Players.PlayerThree == "" {
		s.Players.PlayerThree = name
		return
	}
	if s.Players.PlayerFour == "" {
		s.Players.PlayerFour = name
	}
	s.Year = 1
	s.dealCards()
}

func (s *State) SetShopCount(p string, sh Shop, c int) {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	if s.Year > 6 {
		return
	}

	count := s.ShopAllocation[p][sh] + c
	if count >= 0 {
		s.ShopAllocation[p][sh] = count
	}
}
func (s *State) SetTile(sh Shop, n int) {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	if s.Year > 6 {
		return
	}
	player := s.Ownership[n-1].Player
	shops := s.ShopAllocation[player]
	count := shops[sh] - 1
	shops[sh] = count
	s.ShopAllocation[player] = shops
	s.Ownership[n-1].Shop = sh
}

func (s *State) WriteJSON(w io.Writer) {
	s.mutex.RLock()
	defer s.mutex.RUnlock()
	json.NewEncoder(w).Encode(s)
}

type PlayerNames struct {
	PlayerOne   string
	PlayerTwo   string
	PlayerThree string
	PlayerFour  string
}
