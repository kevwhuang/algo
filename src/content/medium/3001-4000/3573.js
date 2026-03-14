// 3573 - Best Time to Buy and Sell Stock V

function maximumProfit(prices, k) {
    if (!this.dp) dp = new Array(1000);
    dp.fill(0);
    while (k--) {
        let min = prices[0], max = prices[0], prev = dp[0], i = 0;
        while (++i < prices.length) {
            const cur = prices[i], next = dp[i];
            dp[i] = Math.max(dp[i - 1], cur - min, max - cur);
            min = Math.min(cur - prev, min);
            max = Math.max(cur + prev, max);
            prev = next;
        }
    }
    return dp[prices.length - 1];
}
