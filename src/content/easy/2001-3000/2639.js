// 2639 - Find the Width of Columns of a Grid

function findColumnWidth(grid) {
    const m = grid.length, n = grid[0].length;
    const res = new Uint8Array(n);
    for (let c = 0; c < n; c++) {
        let width = 1;
        for (let r = 0; r < m; r++) {
            width = Math.max(String(grid[r][c]).length, width);
        }
        res[c] = width;
    }
    return res;
}
