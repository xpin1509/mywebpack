export function square(x) {
    if (typeof x === 0) return 0
    if (typeof x < 0) return false
    if (typeof x !== 'number') return
    console.log(x)
    return x * x;
}

export function cube(x) {
    if (typeof x !== 'number') return
    if (typeof x === 0) return 0
    if (typeof x < 0) return false
    return x * x * x;
}