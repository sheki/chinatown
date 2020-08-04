package euler

import (
	"fmt"
	"sync"
)

func numCollatz(n uint64, store *sync.Map, wg *sync.WaitGroup) uint64 {
	defer func() {
		if wg != nil {
			wg.Done()
		}
	}()
	if n == 1 {
		return 1
	}
	v, ok := store.Load(n)

	if ok {
		return v.(uint64)
	}
	next := uint64(0)
	if n%2 == 0 {
		next = n / 2
	} else {
		next = 3*n + 1
	}
	result := 1 + numCollatz(next, store, nil)
	store.Store(n, result)
	return result
}

func Prob14() {
	var m sync.Map
	var wg sync.WaitGroup

	for n := uint64(2); n <= 1_000_000; n++ {
		wg.Add(1)
		go numCollatz(n, &m, &wg)
	}
	wg.Wait()
	largest := uint64(0)
	k := uint64(0)
	for n := uint64(2); n <= 1_000_000; n++ {
		v, ok := m.Load(n)
		if ok {
			t := v.(uint64)
			if t > largest {
				largest = t
				k = n
			}
		}
	}
	fmt.Println(largest, k)
}
