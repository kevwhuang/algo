// 256 - Paint House

function minCost(costs) {
    const dp = costs;
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] += Math.min(dp[i - 1][1], dp[i - 1][2]);
        dp[i][1] += Math.min(dp[i - 1][0], dp[i - 1][2]);
        dp[i][2] += Math.min(dp[i - 1][0], dp[i - 1][1]);
    }
    return Math.min(...dp.at(-1));
}
