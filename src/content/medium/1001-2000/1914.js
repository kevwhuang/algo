// 1914 - Cyclically Rotating a Grid

function rotateGrid(grid, k) {
    let r1 = 0, r2 = grid.length - 1, c1 = 0, c2 = grid[0].length - 1;
    while (r1 < r2 && c1 < c2) {
        let rotations = k % (-2 * (r1 - r2 + c1 - c2));
        while (rotations-- > 0) {
            let prev = grid[r1][c1], temp;
            for (let r = r1 + 1; r <= r2; r++) {
                temp = grid[r][c1];
                grid[r][c1] = prev;
                prev = temp;
            }
            for (let c = c1 + 1; c <= c2; c++) {
                temp = grid[r2][c];
                grid[r2][c] = prev;
                prev = temp;
            }
            for (let r = r2 - 1; r >= r1; r--) {
                temp = grid[r][c2];
                grid[r][c2] = prev;
                prev = temp;
            }
            for (let c = c2 - 1; c >= c1; c--) {
                temp = grid[r1][c];
                grid[r1][c] = prev;
                prev = temp;
            }
        }
        r1++, r2--, c1++, c2--;
    }
    return grid;
}
