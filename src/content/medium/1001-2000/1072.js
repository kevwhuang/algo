// 1072 - Flip Columns for Maximum Number of Equal Rows

function maxEqualRowsAfterFlips(matrix) {
    const map = new Map();
    const m = matrix.length, n = matrix[0].length;
    for (let r = 0; r < m; r++) {
        if (matrix[r][0]) {
            for (let c = 0; c < n; c++) {
                matrix[r][c] = matrix[r][c] ? 0 : 1;
            }
        }
        const row = matrix[r].join('');
        map.set(row, map.get(row) + 1 || 1);
    }
    return Math.max(...map.values());
}
