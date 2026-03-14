// 276 - Paint Fence

function numWays(n, k) {
    if (n === 1) return k;
    let a = k, b = k * k, i = 1;
    while (++i < n) {
        const next = (k - 1) * (a + b);
        a = b, b = next;
    }
    return b;
}
