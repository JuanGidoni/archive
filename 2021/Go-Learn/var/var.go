package main

import "fmt"

var a int
var b string

type hotdog string

var c hotdog

func main() {
	a = 5
	b = "5"
	fmt.Println(a)
	fmt.Printf("%T\n", a)
	fmt.Println(b)
	fmt.Printf("%T\n", b)
	fmt.Println(c)
	fmt.Printf("%T\n", c)
}
