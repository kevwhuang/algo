// 3128 - Right Triangles

function numberOfRightTriangles(grid) {
    const m = grid.length, n = grid[0].length;
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            rows[r]++, cols[c]++;
        }
    }
    let triangles = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            triangles += (rows[r] - 1) * (cols[c] - 1);
        }
    }
    return triangles;
}
