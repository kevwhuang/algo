// 343 - Integer Break

function integerBreak(n) {
    if (n < 4) return n - 1;
    let prod = 1;
    while (n > 4) prod *= 3, n -= 3;
    return prod * n;
}
