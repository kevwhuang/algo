// 279 - Perfect Squares

function numSquares(n) {
    const sqrt = Math.sqrt(n);
    if (Number.isInteger(sqrt)) return 1;
    for (let num = 1; num <= sqrt; num++) {
        if (Number.isInteger(Math.sqrt(n - num * num))) return 2;
    }
    while (n % 4 === 0) n /= 4;
    return n % 8 < 7 ? 3 : 4;
}
