// 2571 - Minimum Operations to Reduce an Integer to 0

function minOperations(n) {
    let ops = 0;
    while (n) {
        const exp = Math.log2(n) >> 0;
        n = Math.min(n - 2 ** exp, 2 ** (exp + 1) - n);
        ++ops;
    }
    return ops;
}
