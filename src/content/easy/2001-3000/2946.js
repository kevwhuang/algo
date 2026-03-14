// 2946 - Matrix Similarity After Cyclic Shifts

function areSimilar(mat, k) {
    const m = mat.length, n = mat[0].length;
    for (let r = 0; r < m; r += 2) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c] !== mat[r][(c - k + 50 * n) % n]) return false;
        }
    }
    for (let r = 1; r < m; r += 2) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c] !== mat[r][(c + k) % n]) return false;
        }
    }
    return true;
}
