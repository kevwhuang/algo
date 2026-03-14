// 1329 - Sort the Matrix Diagonally

function diagonalSort(mat) {
    const m = mat.length, n = mat[0].length;
    for (let c = -m + 2; c < n - 1; c++) {
        let diag = [];
        for (let r = 0; r < m; r++) {
            if (mat[r][r + c]) diag.push(mat[r][r + c]);
        }
        diag = new Uint8Array(diag).sort();
        for (let idx = 0, r = 0; r < m; r++) {
            if (mat[r][r + c]) mat[r][r + c] = diag[idx++];
        }
    }
    return mat;
}
