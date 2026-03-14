// 3665 - Twisted Mirror Path Count

function uniquePaths(grid) {
    const m = grid.length, n = grid[0].length;
    const dp1 = new Uint32Array(n), dp2 = new Uint32Array(n);
    dp1[0] = 1;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const a = dp1[c], b = c ? dp2[c - 1] : 0;
            if (grid[r][c]) dp1[c] = b, dp2[c] = a;
            else dp1[c] = dp2[c] = (a + b) % 1000000007;
        }
    }
    return dp2[n - 1];
}
