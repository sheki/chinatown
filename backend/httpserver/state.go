package httpserver

import (
	"encoding/json"
	"io"
	"log"
	"math/rand"
	"sync"
)

type State struct {
	Version         int
	Players         PlayerNames
	Year            int
	Phase           TurnPhase
	TilesAllocation *TilesAllocation
	CardsDealt      int
	Money           MoneyAllocation
	Ownership       []TileOwnership
	mutex           *sync.RWMutex
	shops           []Shop

	ShopAllocation map[string]map[Shop]int

	tiles []int
}

type TileOwnership struct {
	TileNumber int
	Player     string
	Shop       Shop
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
	var towns []TileOwnership
	for i := 1; i <= 85; i++ {
		tiles = append(tiles, i)
		towns = append(towns, TileOwnership{i, "", ""})
	}
	shops := map[string]map[Shop]int{
		"PlayerOne":   InitialMap,
		"PlayerTwo":   InitialMap,
		"PlayerThree": InitialMap,
		"PlayerFour":  InitialMap,
	}
	s := &State{
		Year:       0,
		CardsDealt: tileRounds[0],
		tiles:      tiles,
		mutex:      &sync.RWMutex{},
		Ownership:  towns,
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
	if s.Year < 6 {
		s.incrementVersion()
		s.Year += 1
		s.CardsDealt = tileRounds[s.Year]
		s.dealCards()
		s.dealShops()
	}
}

func (s *State) AddMoney(player string, money int) {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	if s.Year < 6 {
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

func (s *State) SetOwnership(tileNumber int, player string, shop Shop) {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	if s.Year < 6 && tileNumber <= 85 && tileNumber > 0 {
		s.incrementVersion()
		switch player {
		case "PlayerOne":
			s.Ownership[tileNumber].Player = "PlayerOne"
			s.Ownership[tileNumber].Shop = shop
		case "PlayerTwo":
			s.Ownership[tileNumber].Player = "PlayerTwo"
			s.Ownership[tileNumber].Shop = shop
		case "PlayerThree":
			s.Ownership[tileNumber].Player = "PlayerThree"
			s.Ownership[tileNumber].Shop = shop
		case "PlayerFour":
			s.Ownership[tileNumber].Player = "PlayerFour"
			s.Ownership[tileNumber].Shop = shop
		}
	}
}

func (s *State) ReturnTiles(player string, tiles []int) {
	log.Println("ReturnTiles player=", player, "tiles=", tiles)
	s.mutex.Lock()
	defer s.mutex.Unlock()
	if s.Year < 6 {
		s.incrementVersion()
		switch player {
		case "PlayerOne":
			s.TilesAllocation.PlayerOne = nil
		case "PlayerTwo":
			s.TilesAllocation.PlayerTwo = nil
		case "PlayerThree":
			s.TilesAllocation.PlayerThree = nil
		case "PlayerFour":
			s.TilesAllocation.PlayerFour = nil
		default:
			panic("WTF")
		}
		s.tiles = append(s.tiles, tiles...)
		if s.TilesAllocation.AllReturned() {
			s.Phase = OpenMarket
			s.dealShops()
		}
	}
}

func (s *State) dealCards() {
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
	s.Phase = PickTiles
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
