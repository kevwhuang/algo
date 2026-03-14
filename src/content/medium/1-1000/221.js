// 221 - Maximal Square

function maximalSquare(matrix) {
    let res = 0;
    const dp = matrix, m = dp.length, n = dp[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (dp[r][c] == 0) continue;
            const prev = r && c ? Number(dp[r - 1][c - 1]) : 0;
            const up = r ? Number(dp[r - 1][c]) : 0;
            const left = c ? Number(dp[r][c - 1]) : 0;
            dp[r][c] = 1 + Math.min(prev, up, left);
            res = Math.max(dp[r][c], res);
        }
    }
    return res * res;
}
