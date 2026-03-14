// 2033 - Minimum Operations to Make a Uni-Value Grid

function minOperations(grid, x) {
    const vals = [];
    const m = grid.length, n = grid[0].length;
    const remainder = grid[0][0] % x;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const cell = grid[r][c];
            if (cell % x !== remainder) return -1;
            vals.push(cell);
        }
    }
    vals.sort((a, b) => a - b);
    let ops = 0;
    const target = vals[~~(vals.length / 2)];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            ops += Math.abs(target - grid[r][c]) / x;
        }
    }
    return ops;
}
