// 2008 - Maximum Earnings From Taxi

function maxTaxiEarnings(n, rides) {
    n = rides.length;
    const dp = new Array(n + 1);
    dp[n] = 0;
    const M = rides.sort((a, b) => a[0] - b[0]);
    for (let i = n - 1; ~i; i--) {
        const tgt = M[i][1];
        let l = i + 1, r = n - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (M[m][0] < tgt) l = m + 1;
            else r = m - 1;
        }
        dp[i] = Math.max(dp[i + 1], dp[l] + tgt + M[i][2] - M[i][0]);
    }
    return dp[0];
}
