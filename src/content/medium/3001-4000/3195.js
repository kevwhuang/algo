// 3195 - Find the Minimum Area to Cover All Ones I

function minimumArea(grid) {
    let r1 = 999, r2, c1 = 999, c2 = 0;
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            r1 = Math.min(r, r1);
            r2 = r;
            c1 = Math.min(c, c1);
            c2 = Math.max(c, c2);
        }
    }
    return (r2 - r1 + 1) * (c2 - c1 + 1);
}
