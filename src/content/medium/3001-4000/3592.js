// 3592 - Inverse Coin Change

function findCoins(numWays) {
    const res = [], n = numWays.length, dp = new Uint32Array(n + 1);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        if (dp[i] >= numWays[i - 1]) continue;
        res.push(i);
        for (let j = i; j <= n; j++) {
            dp[j] += dp[j - i];
        }
    }
    for (let i = 1; i <= n; i++) {
        if (dp[i] !== numWays[i - 1]) return [];
    }
    return res;
}
