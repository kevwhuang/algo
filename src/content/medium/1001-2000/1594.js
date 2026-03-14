// 1594 - Maximum Non-Negative Product in a Matrix

function maxProductPath(grid) {
    const fn = () => Array.from({ length: n }, () => [Infinity, -Infinity]);
    const M = grid, m = M.length, n = M[0].length;
    const dp = Array.from({ length: m }, fn);
    dp[0][0] = [M[0][0], M[0][0]];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const rr = r + 1, cc = c + 1;
            if (rr < m) {
                const a = dp[r][c][0] * M[rr][c];
                const b = dp[r][c][1] * M[rr][c];
                dp[rr][c][0] = Math.min(a, b, dp[rr][c][0]);
                dp[rr][c][1] = Math.max(a, b, dp[rr][c][1]);
            }
            if (cc < n) {
                const a = dp[r][c][0] * M[r][cc];
                const b = dp[r][c][1] * M[r][cc];
                dp[r][cc][0] = Math.min(a, b, dp[r][cc][0]);
                dp[r][cc][1] = Math.max(a, b, dp[r][cc][1]);
            }
        }
    }
    return Math.max(-1, dp[m - 1][n - 1][1] % 1000000007);
}
