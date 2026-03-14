// 2088 - Count Fertile Pyramids in a Land

function countPyramids(grid) {
    let res = 0;
    const M = grid, m = M.length, n = M[0].length;
    const dp = Array.from({ length: m }, () => new Uint16Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] === 0) continue;
            const a = r && c ? dp[r - 1][c - 1] : 0;
            const b = r ? dp[r - 1][c] : 0;
            const d = r && c + 1 < n ? dp[r - 1][c + 1] : 0;
            dp[r][c] = Math.min(a, b, d) + 1;
            res += dp[r][c] - 1;
        }
    }
    for (let r = m - 1; ~r; r--) {
        for (let c = n - 1; ~c; c--) {
            if (M[r][c] === 0) continue;
            dp[r][c] = 0;
            const a = r + 1 < m && c ? dp[r + 1][c - 1] : 0;
            const b = r + 1 < m ? dp[r + 1][c] : 0;
            const d = r + 1 < m && c + 1 < n ? dp[r + 1][c + 1] : 0;
            dp[r][c] = Math.min(a, b, d) + 1;
            res += dp[r][c] - 1;
        }
    }
    return res;
}
