package euler

import (
	"math"
)

func mergeMaps(maps ...map[int64]struct{}) map[int64]struct{} {
	res := map[int64]struct{}{}
	for _, m := range maps {
		for k := range m {
			res[k] = struct{}{}
		}
	}
	return res
}

func numFactors(n int64) int {
	sqrt := int64(math.Sqrt(float64(n)))

	first := make(map[int64]struct{})

	for i := int64(1); i <= sqrt; i++ {
		if n%i == 0 {
			first[i] = struct{}{}
			first[n/i] = struct{}{}
		}
	}
	return len(first)
}

func triangularNum(num int) int64 {
	n := int64(num)
	return (n * (n + 1)) / 2
}
