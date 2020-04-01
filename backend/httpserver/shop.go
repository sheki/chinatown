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
