package main

import "fmt"

func main() {
	fmt.Println("Check this numbers...")
	for i := 0; i < 100; i++ {
		if i%2 == 0 {
			fmt.Println(i)
		}
	}
}
