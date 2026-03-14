// 3212 - Count Submatrices With Equal Frequency of X and Y

function numberOfSubmatrices(grid) {
    let submatrices = 0;
    const X = grid, m = X.length, n = X[0].length;
    const Y = Array.from({ length: m }, () => new Uint32Array(n));
    for (let r = 0; r < m; r++) {
        let x = 0, y = 0;
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 'X') x++;
            else if (grid[r][c] === 'Y') y++;
            X[r][c] = x + (r && X[r - 1][c]);
            Y[r][c] = y + (r && Y[r - 1][c]);
            if (X[r][c] && X[r][c] === Y[r][c]) submatrices++;
        }
    }
    return submatrices;
}
