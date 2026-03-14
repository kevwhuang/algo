// 2944 - Minimum Number of Coins for Fruits

function minimumCoins(prices) {
    const n = prices.length, Q = [];
    const dp = new Uint32Array(n + 1);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        const sum = dp[i] + prices[i];
        while (Q.length && dp[Q.at(-1)] + prices[Q.at(-1)] >= sum) Q.pop();
        while (Q.length && 2 * Q[0] < i - 1) Q.shift();
        Q.push(i);
        dp[i + 1] = dp[Q[0]] + prices[Q[0]];
    }
    return dp[n];
}
