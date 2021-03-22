'use strict'

function memoize (f) {
	const m = new Map()
	return (n) => {
		return m.get(n) || (m.set(n, f(n)), m.get(n))
	}
}

// Number of non-memoized calls is n and non-recursive work per call = O(1)
// => time = O(n)
// function memoize (f) {
// 	const m = {}
// 	let hit = 0
// 	let miss = 0
// 	return (n) => {
// 		let ret = m[n]
// 		return ret
// 			? (console.log('hit', ++hit, ret), ret)
// 			: (ret = f(n), console.log('miss', ++miss, ret), m[n] = ret, ret)
// 	}
// }


const memfib = memoize((n) => n < 3
	? 1
	: memfib(n - 1) + memfib(n - 2))


console.log(
	memfib(
		process.argv[2]
	)
)
