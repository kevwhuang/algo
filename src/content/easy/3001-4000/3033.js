// 3033 - Modify the Matrix

function modifiedMatrix(matrix) {
    const M = matrix, m = M.length, n = M[0].length;
    for (let c = 0; c < n; c++) {
        let max = 0;
        const rows = [];
        for (let r = 0; r < m; r++) {
            if (M[r][c] === -1) rows.push(r);
            else max = Math.max(M[r][c], max);
        }
        for (let i = 0; i < rows.length; i++) {
            M[rows[i]][c] = max;
        }
    }
    return M;
}
