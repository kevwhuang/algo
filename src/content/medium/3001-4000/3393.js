// 3393 - Count Paths With the Given XOR Value

function countPathsWithXorValue(grid, k) {
    const fn = () => Array.from({ length: n }, () => new Uint32Array(16));
    const M = grid, m = M.length, n = M[0].length;
    const dp = Array.from({ length: m }, fn);
    dp[0][0][M[0][0]] = 1;
    const mod = 1000000007;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            for (let j, i = 0; i < 16; i++) {
                const cur = dp[r][c][i];
                if (cur === 0) continue;
                const rr = r + 1, cc = c + 1;
                if (rr < m) j = i ^ M[rr][c];
                if (rr < m) dp[rr][c][j] = (dp[rr][c][j] + cur) % mod;
                if (cc < n) j = i ^ M[r][cc];
                if (cc < n) dp[r][cc][j] = (dp[r][cc][j] + cur) % mod;
            }
        }
    }
    return dp[m - 1][n - 1][k];
}
