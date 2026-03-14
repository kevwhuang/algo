// 562 - Longest Line of Consecutive One in Matrix

function longestLine(mat) {
    let res = 0;
    const m = mat.length, n = mat[0].length;
    const dp1 = new Uint16Array(m), dp2 = new Uint16Array(n);
    const dp3 = new Uint16Array(m + n - 1), dp4 = new Uint16Array(m + n - 1);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const i = r + c, j = c + m - r - 1;
            if (mat[r][c] === 0) dp1[r] = dp2[c] = dp3[i] = dp4[j] = 0;
            if (mat[r][c] === 0) continue;
            res = Math.max(++dp1[r], ++dp2[c], ++dp3[i], ++dp4[j], res);
        }
    }
    return res;
}
