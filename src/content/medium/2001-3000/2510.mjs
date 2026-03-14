// 2510 - Check If There Is a Path With Equal Number of 0's and 1's

function isThereAPath(grid) {
    const M = grid, m = M.length, n = M[0].length;
    if ((m + n) % 2 === 0) return false;
    const dp = Array.from({ length: m }, () => new Uint16Array(n));
    dp[0][0] = M[0][0];
    for (let r = 1; r < m; r++) {
        dp[r][0] = dp[r - 1][0] + M[r][0];
        M[r][0] += M[r - 1][0];
    }
    for (let c = 1; c < n; c++) {
        dp[0][c] = dp[0][c - 1] + M[0][c];
        M[0][c] += M[0][c - 1];
    }
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + M[r][c];
            M[r][c] += Math.max(M[r - 1][c], M[r][c - 1]);
        }
    }
    const tgt = m + n - 1 >> 1;
    return dp[m - 1][n - 1] <= tgt && tgt <= M[m - 1][n - 1];
}
