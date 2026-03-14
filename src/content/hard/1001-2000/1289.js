// 1289 - Minimum Falling Path Sum II

function minFallingPathSum(grid) {
    const dp = grid, n = dp.length;
    for (let r = 1; r < n; r++) {
        let min1 = Infinity, min2 = Infinity;
        for (let c = 0; c < n; c++) {
            const cur = dp[r - 1][c];
            if (cur < min1) min2 = min1, min1 = cur;
            else if (cur < min2) min2 = cur;
        }
        for (let c = 0; c < n; c++) {
            dp[r][c] += dp[r - 1][c] === min1 ? min2 : min1;
        }
    }
    return dp.at(-1).reduce((s, e) => Math.min(e, s));
}
