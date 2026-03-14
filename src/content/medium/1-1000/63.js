// 63 - Unique Paths II

function uniquePathsWithObstacles(obstacleGrid) {
    const dp = obstacleGrid, m = dp.length, n = dp[0].length;
    let paths = 1;
    for (let c = 0; c < n; c++) {
        if (dp[0][c]) paths = 0;
        dp[0][c] = paths;
    }
    paths = dp[0][0];
    for (let r = 1; r < m; r++) {
        if (dp[r][0]) paths = 0;
        dp[r][0] = paths;
        for (let c = 1; c < n; c++) {
            dp[r][c] = dp[r][c] ? 0 : dp[r - 1][c] + dp[r][c - 1];
        }
    }
    return dp[m - 1][n - 1];
}
