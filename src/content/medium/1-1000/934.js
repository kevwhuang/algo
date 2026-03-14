// 934 - Shortest Bridge

function shortestBridge(grid) {
    function getBorder() {
        const cells = [];
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] !== 1) continue;
                dfs(r, c, cells);
                return cells;
            }
        }
    }
    function dfs(r, c, cells) {
        if (grid[r][c] !== 1) return;
        grid[r][c] = 2;
        let water = 0;
        for (let i = 0; i < 4; i++) {
            const rr = r + dirs[i][0], cc = c + dirs[i][1];
            if (!validate(rr, cc)) continue;
            if (grid[rr][cc] === 0) water++;
            dfs(rr, cc, cells);
        }
        if (water) cells.push([r, c]);
    }
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const m = grid.length, n = grid[0].length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const cells1 = getBorder();
    const cells2 = getBorder();
    let min = Infinity;
    for (let i = 0; i < cells1.length; i++) {
        for (let j = 0; j < cells2.length; j++) {
            const dr = Math.abs(cells1[i][0] - cells2[j][0]);
            const dc = Math.abs(cells1[i][1] - cells2[j][1]);
            min = Math.min(dr + dc, min);
        }
    }
    return min - 1;
}
