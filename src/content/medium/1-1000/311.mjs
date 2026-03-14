// 311 - Sparse Matrix Multiplication

function multiply(mat1, mat2) {
    const m = mat1.length, n = mat2[0].length;
    const res = new Array(m), coords = {};
    for (let r = 0; r < m; r++) {
        res[r] = new Array(n).fill(0);
        coords[r] = new Set();
        for (let c = 0; c < mat1[0].length; c++) {
            if (mat1[r][c]) coords[r].add(c);
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            for (const col of coords[r]) {
                res[r][c] += mat1[r][col] * mat2[col][c];
            }
        }
    }
    return res;
}
