package euler

// Prob15 Lattice paths input is number of dots and not grid size
func Prob15(n int) int {
	arr := make([][]int, n)
	for i := 0; i < len(arr); i++ {
		arr[i] = make([]int, n)
	}

	arr[0][0] = 1

	for y := 0; y < n; y++ {
		for x := 0; x < n; x++ {
			arr[y][x] += topScore(arr, x, y) + leftScore(arr, x, y)
		}
	}

	return arr[n-1][n-1]
}

func topScore(grid [][]int, x, y int) int {
	if y == 0 {
		return 0
	}

	if y >= len(grid) {
		return 0
	}
	if x >= len(grid) {
		return 0
	}
	if x < 0 {
		return 0
	}
	return grid[y-1][x]
}

func leftScore(grid [][]int, x, y int) int {
	if y < 0 {
		return 0
	}

	if y >= len(grid) {
		return 0
	}
	if x >= len(grid) {
		return 0
	}
	if x == 0 {
		return 0
	}
	return grid[y][x-1]
}
