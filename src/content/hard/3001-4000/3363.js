// 3363 - Find the Maximum Number of Fruits Collected

function maxCollectedFruits(fruits) {
    let res = 0;
    const dp = fruits, n = dp.length, nn = n - 1;
    for (let r = 0; r < n; r++) {
        res += dp[r][r];
    }
    for (let r = 1; r < nn; r++) {
        for (let c = Math.max(nn - r, r + 1); c < n; c++) {
            const left = c - 1 >= n - r ? dp[r - 1][c - 1] : 0;
            const up = c >= n - r ? dp[r - 1][c] : 0;
            const right = c < nn ? dp[r - 1][c + 1] : 0;
            dp[r][c] += Math.max(left, up, right);
        }
    }
    for (let c = 1; c < nn; c++) {
        for (let r = Math.max(nn - c, c + 1); r < n; r++) {
            const up = r - 1 >= n - c ? dp[r - 1][c - 1] : 0;
            const left = r >= n - c ? dp[r][c - 1] : 0;
            const down = r < nn ? dp[r + 1][c - 1] : 0;
            dp[r][c] += Math.max(up, left, down);
        }
    }
    return res + dp[n - 2][nn] + dp[nn][n - 2];
}
