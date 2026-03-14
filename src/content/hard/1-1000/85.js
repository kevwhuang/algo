// 85 - Maximal Rectangle

function maximalRectangle(matrix) {
    let res = 0;
    const M = matrix, dp = M[0], m = M.length, n = M[0].length;
    dp.push(0);
    for (let acc = 0, c = 0; c < n; c++) {
        if (dp[c] === '0') acc = 0;
        else res = Math.max(++acc, res);
    }
    const S = new Array(n + 1);
    S[0] = -1;
    for (let r = 1; r < m; r++) {
        for (let i = 0, c = 0; c <= n; c++) {
            if (c < n) dp[c] = M[r][c] === '0' ? 0 : ++dp[c];
            while (i && dp[S[i]] >= dp[c]) {
                res = Math.max(dp[S[i]] * (c - S[--i] - 1), res);
            }
            S[++i] = c;
        }
    }
    return res;
}
