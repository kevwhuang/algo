// 1706 - Where Will the Ball Fall

function findBall(grid) {
    const m = grid.length, n = grid[0].length;
    const res = new Array(n);
    for (let c = 0; c < n; c++) {
        let col = c;
        for (let r = 0; r < m; r++) {
            const dir = grid[r][col];
            col += dir;
            if (col === n || grid[r][col] === -dir) col = -1;
            if (col === -1) break;
        }
        res[c] = col;
    }
    return res;
}
