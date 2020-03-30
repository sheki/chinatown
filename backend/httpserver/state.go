package httpserver

import (
	"log"
	"math/rand"
)

type State struct {
	Version         int
	Players         PlayerNames
	Year            int
	Phase           TurnPhase
	TilesAllocation TilesAllocation
	CardsDealt      int
	Money           MoneyAllocation
	Ownership       []TileOwnership

	tiles []int
}

type TileOwnership struct {
	TileNumber int
	Player     string
	Shop       string
}
type TurnPhase string

const (
	PickTiles  TurnPhase = "pick_tiles"
	OpenMarket           = "open_market"
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

func NewState() *State {
	var tiles []int
	var towns []TileOwnership
	for i := 1; i <= 85; i++ {
		tiles = append(tiles, i)
		towns = append(towns, TileOwnership{i, "", ""})
	}
	s := &State{
		Year:       1,
		CardsDealt: tileRounds[0],
		tiles:      tiles,
		Ownership:  towns,
		Money: MoneyAllocation{
			PlayerOne:   50000,
			PlayerTwo:   50000,
			PlayerThree: 50000,
			PlayerFour:  50000,
		},
	}
	s.dealCards()
	return s
}

var tileRounds = []int{6, 5, 5, 5, 5, 5}

func (s *State) EndYear() {
	if s.Year < 6 {
		s.IncrementVersion()
		s.Year += 1
		s.CardsDealt = tileRounds[s.Year]
		s.dealCards()
	}
}

func (s *State) AddMoney(player string, money int) {
	if s.Year < 6 {
		s.IncrementVersion()
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

func (s *State) SetOwnership(tileNumber int, player string, shop string) {
	if s.Year < 6 && tileNumber <= 85 && tileNumber > 0 {
		s.IncrementVersion()
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
	if s.Year < 6 {
		s.IncrementVersion()
		switch player {
		case "PlayerOne":
			s.TilesAllocation.PlayerOne = nil
		case "PlayerTwo":
			s.TilesAllocation.PlayerTwo = nil
		case "PlayerThree":
			s.TilesAllocation.PlayerThree = nil
		case "PlayerFour":
			s.TilesAllocation.PlayerFour = nil
		}
		s.tiles = append(s.tiles, tiles...)
	}
}

func (s *State) dealCards() {
	var result [][]int
	tiles := s.tiles
	for i := 0; i < 4; i++ {
		num := tileRounds[s.Year-1]
		log.Println("num=", num)
		var r int
		var arr []int
		for j := 0; j < num; j++ {
			r, tiles = pickRandom(tiles)
			arr = append(arr, r)
		}
		result = append(result, arr)
	}
	allocation := TilesAllocation{
		PlayerOne:   result[0],
		PlayerTwo:   result[1],
		PlayerThree: result[2],
		PlayerFour:  result[3],
	}
	s.TilesAllocation = allocation
	s.tiles = tiles
}

func pickRandom(slice []int) (int, []int) {
	s := rand.Intn(len(slice))
	pick := slice[s]
	ret := append(slice[:s], slice[s+1:]...)
	return pick, ret
}

func (s *State) IncrementVersion() {
	s.Version += 1
}

func (s *State) RegisterPlayer(player, name string) {
	s.IncrementVersion()
	switch player {
	case "PlayerOne":
		s.Players.PlayerOne = name
	case "PlayerTwo":
		s.Players.PlayerTwo = name
	case "PlayerThree":
		s.Players.PlayerThree = name
	case "PlayerFour":
		s.Players.PlayerFour = name
	}
}

type PlayerNames struct {
	PlayerOne   string
	PlayerTwo   string
	PlayerThree string
	PlayerFour  string
}
