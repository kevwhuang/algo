// 3546 - Equal Sum Grid Partition I

function canPartitionGrid(grid) {
    let sum = 0;
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            sum += grid[r][c];
        }
    }
    for (let acc = 0, r = 0; acc + acc < sum && r < m; r++) {
        for (let c = 0; c < n; c++) {
            acc += grid[r][c];
        }
        if (acc + acc === sum) return true;
    }
    for (let acc = 0, c = 0; acc + acc < sum && c < n; c++) {
        for (let r = 0; r < m; r++) {
            acc += grid[r][c];
        }
        if (acc + acc === sum) return true;
    }
    return false;
}
