// 265 - Paint House II

function minCostII(costs) {
    const dp = costs, m = dp.length, n = dp[0].length;
    for (let r = 1; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let min = Infinity;
            for (let cc = 0; cc < n; cc++) {
                if (cc === c) continue;
                min = Math.min(dp[r - 1][cc], min);
            }
            dp[r][c] += min;
        }
    }
    return Math.min(...dp.at(-1));
}
