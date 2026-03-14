// 3148 - Maximum Difference Score in a Grid

function maxScore(grid) {
    let res = -Infinity;
    const M = grid, m = M.length, n = M[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (r) res = Math.max(M[r][c] - M[r - 1][c], res);
            if (c) res = Math.max(M[r][c] - M[r][c - 1], res);
            if (r) M[r][c] = Math.min(M[r - 1][c], M[r][c]);
            if (c) M[r][c] = Math.min(M[r][c - 1], M[r][c]);
        }
    }
    return res;
}
