// 1314 - Matrix Block Sum

function matrixBlockSum(mat, k) {
    const m = mat.length, n = mat[0].length;
    const sums = new Array(m);
    for (let r = 0, row, rowSum; r < m; r++) {
        row = new Array(n), rowSum = 0;
        for (let c = 0; c < n; c++) {
            row[c] = (rowSum += mat[r][c]) + (sums[r - 1]?.[c] || 0);
        }
        sums[r] = row;
    }
    for (let r = 0, maxR; r < m; r++) {
        maxR = Math.min(r + k, m - 1);
        for (let c = 0, maxC; c < n; c++) {
            maxC = Math.min(c + k, n - 1);
            mat[r][c] = sums[maxR][maxC];
            if (r - k > 0) mat[r][c] -= sums[r - k - 1][maxC];
            if (c - k > 0) mat[r][c] -= sums[maxR][c - k - 1];
            if (r - k > 0 && c - k > 0) mat[r][c] += sums[r - k - 1][c - k - 1];
        }
    }
    return mat;
}
