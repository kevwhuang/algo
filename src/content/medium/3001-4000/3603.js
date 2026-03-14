// 3603 - Minimum Cost Path With Alternating Directions II

function minCost(m, n, waitCost) {
    waitCost[0][0] = waitCost[m - 1][n - 1] = 0;
    const dp = new Array(n);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let min = Infinity;
            if (r) min = Math.min(dp[c], min);
            if (c) min = Math.min(dp[c - 1], min);
            if (min === Infinity) min = 0;
            dp[c] = (r + 1) * (c + 1) + waitCost[r][c] + min;
        }
    }
    return dp[n - 1];
}
