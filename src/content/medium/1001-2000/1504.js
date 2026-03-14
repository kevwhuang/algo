// 1504 - Count Submatrices With All Ones

function numSubmat(mat) {
    const m = mat.length, n = mat[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 1; c < n; c++) {
            if (mat[r][c]) mat[r][c] += mat[r][c - 1];
        }
    }
    let submatrices = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            for (let rr = r, min = 150; ~rr && min; rr--) {
                min = Math.min(mat[rr][c], min);
                submatrices += min;
            }
        }
    }
    return submatrices;
}
