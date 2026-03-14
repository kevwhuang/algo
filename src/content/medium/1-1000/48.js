// 48 - Rotate Image

function rotate(matrix) {
    const M = matrix, n = M.length;
    for (let r = 0; r < n; r++) {
        for (let cur, c = r + 1; c < n; c++) {
            cur = M[r][c], M[r][c] = M[c][r], M[c][r] = cur;
        }
    }
    M.forEach(e => e.reverse());
}
