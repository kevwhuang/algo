// 2830 - Maximize the Profit as the Salesman

function maximizeTheProfit(n, offers) {
    n = offers.length;
    const dp = new Uint32Array(n + 1);
    const M = offers.sort((a, b) => a[0] - b[0]);
    for (let i = n - 1; ~i; i--) {
        const tgt = M[i][1];
        let l = i + 1, r = n - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (M[m][0] <= tgt) l = m + 1;
            else r = m - 1;
        }
        dp[i] = Math.max(dp[i + 1], dp[l] + M[i][2]);
    }
    return dp[0];
}
