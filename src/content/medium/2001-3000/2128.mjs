// 2128 - Remove All Ones With Row and Column Flips

function removeOnes(grid) {
    const m = grid.length, n = grid[0].length;
    for (let c = 0; c < n; c++) {
        if (grid[0][c] === 0) continue;
        for (let r = 0; r < m; r++) {
            grid[r][c] = grid[r][c] ? 0 : 1;
        }
    }
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            if (grid[r][c - 1] !== grid[r][c]) return false;
        }
    }
    return true;
}
