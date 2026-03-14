// 1937 - Maximum Number of Points With Cost

function maxPoints(points) {
    const M = points, m = M.length, n = M[0].length;
    for (let r = 1; r < m; r++) {
        const dp = M[r - 1];
        for (let c = 1; c < n; c++) {
            dp[c] = Math.max(dp[c - 1] - 1, dp[c]);
        }
        M[r][n - 1] += dp[n - 1];
        for (let c = n - 2; ~c; c--) {
            M[r][c] += dp[c] = Math.max(dp[c + 1] - 1, dp[c]);
        }
    }
    return Math.max(...M[m - 1]);
}
