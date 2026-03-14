// 2361 - Minimum Costs Using the Train Line

function minimumCosts(regular, express, expressCost) {
    const dp1 = regular, dp2 = express, n = dp1.length - 1;
    dp2[0] += expressCost;
    for (let i = 1; i <= n; i++) {
        const a = dp1[i - 1], b = dp2[i - 1];
        dp1[i - 1] = Math.min(a, b);
        dp1[i] += Math.min(a, b);
        dp2[i] += Math.min(a + expressCost, b);
    }
    dp1[n] = Math.min(dp2[n], dp1[n]);
    return dp1;
}
