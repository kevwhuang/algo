// 1277 - Count Square Submatrices With All Ones

function countSquares(matrix) {
    let res = 0;
    const dp = matrix, m = dp.length, n = dp[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (dp[r][c] === 0) continue;
            const prev = r && c ? dp[r - 1][c - 1] : 0;
            const up = r ? dp[r - 1][c] : 0;
            const left = c ? dp[r][c - 1] : 0;
            res += dp[r][c] += Math.min(prev, up, left);
        }
    }
    return res;
}
