// 304 - Range Sum Query 2D - Immutable

class NumMatrix {
    constructor(matrix) {
        this.matrix = this.#init(matrix);
    }
    sumRegion(row1, col1, row2, col2) {
        const M = this.matrix;
        let sum = M[row2][col2];
        if (row1) sum -= M[row1 - 1][col2];
        if (col1) sum -= M[row2][col1 - 1];
        if (row1 && col1) sum += M[row1 - 1][col1 - 1];
        return sum;
    }
    #init(M) {
        const m = M.length, n = M[0].length;
        for (let c = 1; c < n; c++) {
            M[0][c] += M[0][c - 1];
        }
        for (let r = 1; r < m; r++) {
            M[r][0] += M[r - 1][0];
        }
        for (let r = 1; r < m; r++) {
            for (let c = 1; c < n; c++) {
                M[r][c] += M[r - 1][c] + M[r][c - 1];
                M[r][c] -= M[r - 1][c - 1];
            }
        }
        return M;
    }
}
