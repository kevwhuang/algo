// 807 - Max Increase to Keep City Skyline

function maxIncreaseKeepingSkyline(grid) {
    const len = grid.length;
    const rowMaxes = new Array(len);
    const colMaxes = new Array(len);
    for (let c = 0, max; c < len; c++) {
        rowMaxes[c] = Math.max(...grid[c]);
        max = 0;
        for (let r = 0; r < len; r++) {
            max = Math.max(grid[r][c], max);
        }
        colMaxes[c] = max;
    }
    let sum = 0;
    for (let r = 0; r < len; r++) {
        for (let c = 0; c < len; c++) {
            sum += Math.min(rowMaxes[r], colMaxes[c]) - grid[r][c];
        }
    }
    return sum;
}
