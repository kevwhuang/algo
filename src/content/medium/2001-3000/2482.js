// 2482 - Difference Between Ones and Zeros in Row and Column

function onesMinusZeros(grid) {
    const m = grid.length, n = grid[0].length;
    const onesRows = new Array(m).fill(0);
    const onesCols = new Array(n).fill(0);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (!grid[r][c]) continue;
            onesRows[r]++;
            onesCols[c]++;
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            grid[r][c] = 2 * (onesRows[r] + onesCols[c]) - m - n;
        }
    }
    return grid;
}
