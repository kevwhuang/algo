// 3070 - Count Submatrices With Top-Left Element and Sum Less Than K

function countSubmatrices(grid, k) {
    let submatrices = 0, rowSum = 0;
    const n = grid[0].length;
    for (let c = 0; c < n; c++) {
        rowSum += grid[0][c];
        grid[0][c] = rowSum;
        if (grid[0][c] <= k) submatrices++;
    }
    const m = grid.length;
    for (let r = 1; r < m; r++) {
        rowSum = 0;
        for (let c = 0; c < n; c++) {
            rowSum += grid[r][c];
            grid[r][c] = rowSum + grid[r - 1][c];
            if (grid[r][c] <= k) submatrices++;
        }
    }
    return submatrices;
}
