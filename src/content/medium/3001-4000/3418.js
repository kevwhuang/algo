// 3418 - Maximum Amount of Money Robot Can Earn

function maximumAmount(coins) {
    const fn = () => new Int32Array(n + 1).fill(-1e6);
    const m = coins.length, n = coins[0].length;
    const dp1 = Array.from({ length: m + 1 }, fn);
    const dp2 = Array.from({ length: m + 1 }, fn);
    const dp3 = Array.from({ length: m + 1 }, fn);
    dp1[0][1] = dp1[1][0] = 0;
    for (let r = 1; r <= m; r++) {
        for (let c = 1; c <= n; c++) {
            const cur = coins[r - 1][c - 1];
            const a1 = dp1[r - 1][c], b1 = dp1[r][c - 1];
            const a2 = dp2[r - 1][c], b2 = dp2[r][c - 1];
            const a3 = dp3[r - 1][c], b3 = dp3[r][c - 1];
            dp1[r][c] = Math.max(a1 + cur, b1 + cur);
            dp2[r][c] = Math.max(a1, b1, a2 + cur, b2 + cur);
            dp3[r][c] = Math.max(a2, b2, a3 + cur, b3 + cur);
        }
    }
    return Math.max(dp1[m][n], dp2[m][n], dp3[m][n]);
}
