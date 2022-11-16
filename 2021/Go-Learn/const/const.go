package main

import "fmt"

const a int = 2
const b string = "Hello"

type hotdog string

const c hotdog = "There"

func main() {
	fmt.Println(a)
	fmt.Printf("%T\n", a)
	fmt.Println(b)
	fmt.Printf("%T\n", b)
	fmt.Println(c)
	fmt.Printf("%T\n", c)
}
