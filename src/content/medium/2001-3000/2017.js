// 2017 - Grid Game

function gridGame(grid) {
    let points = grid[0].reduce((s, e) => s + e) - grid[0][0];
    let top = points, bot = 0;
    const n = grid[0].length;
    for (let i = 1; i < n; i++) {
        top -= grid[0][i];
        bot += grid[1][i - 1];
        points = Math.min(Math.max(top, bot), points);
    }
    return points;
}
