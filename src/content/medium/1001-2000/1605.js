// 1605 - Find Valid Matrix Given Row and Column Sums

function restoreMatrix(rowSum, colSum) {
    const m = rowSum.length, n = colSum.length;
    const mat = Array.from({ length: m }, () => new Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const cell = Math.min(rowSum[r], colSum[c]);
            mat[r][c] = cell;
            rowSum[r] -= cell;
            colSum[c] -= cell;
        }
    }
    return mat;
}
