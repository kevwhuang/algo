// 1337 - The K Weakest Rows in a Matrix

function kWeakestRows(mat, k) {
    const m = mat.length, n = mat[0].length;
    for (let r = 0; r < m; r++) {
        let strength = 0;
        for (let c = 0; c < n; c++) {
            if (!mat[r][c]) break;
            strength++;
        }
        mat[r] = [r, strength];
    }
    mat.sort((a, b) => a[1] - b[1]);
    const indices = new Array(k);
    for (let i = 0; i < mat.length; i++) {
        indices[i] = mat[i][0];
        if (i === k - 1) return indices;
    }
}
