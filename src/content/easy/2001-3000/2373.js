// 2373 - Largest Local Values in a Matrix

function largestLocal(grid) {
    const M = grid, m = M.length - 1, n = M[0].length - 1;
    const res = new Array(m - 1);
    for (let r = 1; r < m; r++) {
        const row = new Uint8Array(n - 1);
        res[r - 1] = row;
        for (let c = 1; c < n; c++) {
            const n1 = Math.max(M[r - 1][c - 1], M[r - 1][c], M[r - 1][c + 1]);
            const n2 = Math.max(M[r][c - 1], M[r][c], M[r][c + 1]);
            const n3 = Math.max(M[r + 1][c - 1], M[r + 1][c], M[r + 1][c + 1]);
            row[c - 1] = Math.max(n1, n2, n3);
        }
    }
    return res;
}
