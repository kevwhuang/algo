// 322 - Coin Change

function coinChange(coins, amount) {
    const dp = new Uint16Array(amount + 1).fill(50000);
    dp[0] = 0;
    for (let i = 0; i < coins.length; i++) {
        const cur = coins[i];
        for (let j = cur; j <= amount; j++) {
            dp[j] = Math.min(dp[j - cur] + 1, dp[j]);
        }
    }
    return dp[amount] === 50000 ? -1 : dp[amount];
}
