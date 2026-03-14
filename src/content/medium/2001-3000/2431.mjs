// 2431 - Maximize Total Tastiness of Purchased Fruits

function maxTastiness(price, tastiness, maxAmount, maxCoupons) {
    const m = maxAmount, n = maxCoupons;
    const dp = Array.from({ length: m + 1 }, () => new Uint32Array(n + 1));
    for (let i = 0; i < price.length; i++) {
        const a = price[i], b = tastiness[i], c = a >> 1;
        for (let j = m; j >= c; j--) {
            for (let k = n; ~k; k--) {
                if (j >= a) dp[j][k] = Math.max(dp[j - a][k] + b, dp[j][k]);
                if (k) dp[j][k] = Math.max(dp[j - c][k - 1] + b, dp[j][k]);
            }
        }
    }
    return dp[m][n];
}
