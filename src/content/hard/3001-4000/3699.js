// 3699 - Number of Zigzag Arrays I

function zigZagArrays(n, l, r) {
    const m = r - l, dp = new Uint32Array(m + 1).fill(1), mod = 1000000007;
    while (--n) {
        const d = n % 2 ? 1 : -1;
        for (let cur, prev = 0, i = n % 2 ? 0 : m; ~i && i <= m; i += d) {
            cur = dp[i], dp[i] = prev, prev = (prev + cur) % mod;
        }
    }
    return 2 * dp.reduce((s, e) => s + e % mod) % mod;
}
