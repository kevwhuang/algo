// 576 - Out of Boundary Paths

function findPaths(m, n, maxMove, startRow, startColumn) {
    let res = 0;
    const dp = Array.from({ length: 2 }, () => new Array(m * n).fill(0));
    dp[0][n * startRow + startColumn]++;
    const size = m * n, d = [0, -1, 0, 1, 0], mod = 1000000007;
    while (maxMove--) {
        for (let i = 0; i < size; i++) {
            const cur = dp[0][i];
            if (cur === 0) continue;
            const r = i / n >> 0, c = i % n;
            for (let j = 0; j < 4; j++) {
                const rr = r + d[j], cc = c + d[j + 1];
                if (~rr && rr < m && ~cc && cc < n) {
                    const idx = n * rr + cc;
                    dp[1][idx] = (dp[1][idx] + cur) % mod;
                } else {
                    res = (res + cur) % mod;
                }
            }
        }
        const swap = dp[0];
        dp[0] = dp[1], dp[1] = swap.fill(0);
    }
    return res;
}
