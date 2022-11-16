package main

import (
	"fmt"
)

func main() {
	message := "String type"
	fmt.Println(message)
	fmt.Println("")

	bs := []byte(message)
	fmt.Println(bs)
	fmt.Println("")

	for i := 0; i < len(message); i++ {
		fmt.Printf("%#U ", message[i])
	}
	fmt.Println("")

	for i, v := range message {
		fmt.Printf("at index position %d we have hex %#x\n", i, v)
	}
	fmt.Println("")
}
