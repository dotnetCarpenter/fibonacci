'use strict'

function* range(start, end) {
	yield start
	if (start === end) return
	yield* range(start + 1, end)
}

function fib (n) {
	const lookupTable = []

	let f = 0
	for (var k of range(1, n)) {
		if (k < 3) f = 1
		else f = lookupTable[k - 1] + lookupTable[k - 2]

		lookupTable[k] = f
	}

	return lookupTable[n]
}

console.log(
	fib(
		Number(process.argv[2])
	)
)
