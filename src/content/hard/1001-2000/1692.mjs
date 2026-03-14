// 1692 - Count Ways to Distribute Candies

function waysToDistribute(n, k) {
    if (!this.dp) dp = new Uint32Array(1001);
    dp.fill(0, 0, k + 1).fill(1, 0, 1);
    for (let i = 1; i <= n; i++) {
        for (let j = Math.min(i, k); j; j--) {
            dp[j] = (dp[j - 1] + dp[j] * j) % 1000000007;
        }
        dp[0] = 0;
    }
    return dp[k];
}
