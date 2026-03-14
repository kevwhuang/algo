// 3402 - Minimum Operations to Make Columns Strictly Increasing

function minimumOperations(grid) {
    let res = 0;
    const M = grid, m = M.length, n = M[0].length;
    for (let c = 0; c < n; c++) {
        for (let r = 1; r < m; r++) {
            const d = M[r - 1][c] - M[r][c] + 1;
            if (d > 0) res += d, M[r][c] += d;
        }
    }
    return res;
}
