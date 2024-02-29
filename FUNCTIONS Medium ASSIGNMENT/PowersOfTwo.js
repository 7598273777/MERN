function powersOfTwo(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}

console.log(powersOfTwo(0)); // Output: [1]
console.log(powersOfTwo(1)); // Output: [1, 2]
console.log(powersOfTwo(2)); // Output: [1, 2, 4]
