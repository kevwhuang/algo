// 3643 - Flip Square Submatrix Vertically

function reverseSubmatrix(grid, x, y, k) {
    const M = grid, n = y + k;
    for (let cur, r = x, rr = x + k - 1; r < rr; r++, rr--) {
        for (let c = y; c < n; c++) {
            cur = M[r][c], M[r][c] = M[rr][c], M[rr][c] = cur;
        }
    }
    return M;
}
