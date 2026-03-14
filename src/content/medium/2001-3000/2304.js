// 2304 - Minimum Path Cost in a Grid

function minPathCost(grid, moveCost) {
    const m = grid.length, n = grid[0].length;
    const dp = Array.from({ length: m }, (_, r) => new Uint16Array(grid[r]));
    for (let r = 1; r < m; r++) {
        for (let c = 0; c < n; c++) {
            let min = Infinity;
            for (let cc = 0; cc < n; cc++) {
                const cost = moveCost[grid[r - 1][cc]][c];
                min = Math.min(dp[r - 1][cc] + cost, min);
            }
            dp[r][c] += min;
        }
    }
    return Math.min(...dp.at(-1));
}
