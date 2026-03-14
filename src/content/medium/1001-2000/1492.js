// 1492 - The Kth Factor of N

function kthFactor(n, k) {
    for (let factor = 1; factor <= n / 2; factor++) {
        if (n % factor) continue;
        if (--k === 0) return factor;
    }
    return k === 1 ? n : -1;
}
