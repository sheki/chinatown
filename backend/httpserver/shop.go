package httpserver

type Shop string

const (
	Restaurant Shop = "Restaurant"
	Antique         = "Antique"
	Factory         = "Factory"
	Dimsum          = "Dimsum"
	Laundry         = "Laundry"
	Takeout         = "Takeout"
	Fish            = "Fish"
	Florist         = "Florist"
	Jewellery       = "Jewellery"
	Photo           = "Photo"
	Seafood         = "Seafood"
	Tea             = "Tea"
)

var ShopAllocation = []int{6, 3, 3, 3, 3, 3}

func NewShopMap() map[Shop]int {
	return map[Shop]int{
		Restaurant: 0,
		Antique:    0,
		Factory:    0,
		Dimsum:     0,
		Laundry:    0,
		Takeout:    0,
		Fish:       0,
		Florist:    0,
		Jewellery:  0,
		Photo:      0,
		Seafood:    0,
		Tea:        0,
	}
}

func ShopOfString(s string) Shop {
	switch s {
	case "Restaurant":
		return Restaurant
	case "Antique":
		return Antique
	case "Factory":
		return Factory
	case "Dimsum":
		return Dimsum
	case "Laundry":
		return Laundry
	case "Takeout":
		return Takeout
	case "Fish":
		return Fish
	case "Florist":
		return Florist
	case "Jewellery":
		return Jewellery
	case "Photo":
		return Photo
	case "Seafood":
		return Seafood
	case "Tea":
		return Tea
	default:
		panic("unknown shop string " + s)
	}
}

func InitialShops() []Shop {
	shops := map[Shop]int{
		Restaurant: 9,
		Antique:    9,
		Factory:    9,
		Dimsum:     8,
		Laundry:    8,
		Takeout:    8,
		Fish:       7,
		Florist:    7,
		Jewellery:  7,
		Photo:      6,
		Seafood:    6,
		Tea:        6,
	}

	var r []Shop
	for k, v := range shops {
		for i := 0; i < v; i++ {
			r = append(r, k)
		}
	}
	if len(r) != 90 {
		panic("need 90 shop tiles")
	}
	return r
}
