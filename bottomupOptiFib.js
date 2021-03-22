'use strict'

function* range(start, end) {
	yield start
	if (start === end) return
	yield* range(start + 1, end)
}

function fib (n) {
	const dict = new Map()

	let f = 0
	for (var k of range(1, n)) {
		if (k < 3) f = 1
		else {
			f = dict.get(k - 1) + dict.get(k - 2)
			dict.delete(k - 2)
		}

		dict.set(k, f)
	}

	// console.log(process.memoryUsage())
	return dict.get(n)
}

console.log(
	fib(
		Number(process.argv[2])
	)
)
