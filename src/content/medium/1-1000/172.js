// 172 - Factorial Trailing Zeros

function trailingZeroes(n) {
    let zeros = 0;
    for (let i = 5; i <= n; i *= 5) {
        zeros += n / i >> 0;
    }
    return zeros;
}
