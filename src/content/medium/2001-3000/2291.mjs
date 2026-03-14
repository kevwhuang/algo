// 2291 - Maximum Profit From Trading Stocks

function maximumProfit(present, future, budget) {
    const dp = new Uint32Array(budget + 1);
    for (let i = 0; i < present.length; i++) {
        const cur = present[i], d = future[i] - cur;
        if (d <= 0) continue;
        for (let j = budget; j >= cur; j--) {
            dp[j] = Math.max(dp[j - cur] + d, dp[j]);
        }
    }
    return dp[budget];
}
