// 3938. Maximum Path Intersection Sum in a Grid

function maxScore(grid) {
    let res = -100;
    const M = grid, m = M.length, mm = m - 1, n = M[0].length, nn = n - 1;
    for (let x = 1; x < mm; x++) {
        for (let y = 1; y < nn; y++) {
            res = Math.max(M[x][y], res);
        }
    }
    for (let x = 0; x < m; x++) {
        let max = -100;
        for (let acc = M[x][0], y = 1; y < n; y++) {
            max = Math.max(acc + M[x][y], max);
            acc = Math.max(acc + M[x][y], M[x][y]);
        }
        res = Math.max(max, res);
    }
    for (let y = 0; y < n; y++) {
        let max = -100;
        for (let acc = M[0][y], x = 1; x < m; x++) {
            max = Math.max(acc + M[x][y], max);
            acc = Math.max(acc + M[x][y], M[x][y]);
        }
        res = Math.max(max, res);
    }
    return res;
}
