// 2428 - Maximum Sum of an Hourglass

function maxSum(grid) {
    const m = grid.length - 2, n = grid[0].length - 2;
    let max = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let sum = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];
            sum += grid[r + 1][c + 1];
            sum += grid[r + 2][c] + grid[r + 2][c + 1] + grid[r + 2][c + 2];
            max = Math.max(sum, max);
        }
    }
    return max;
}
