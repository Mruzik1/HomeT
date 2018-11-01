function fib(c) {
	return c <= 1 ? c : fib(c - 1) + fib(c - 2);
}
console.log(fib(11));