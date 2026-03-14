// 2596 - Check Knight Tour Configuration

function checkValidGrid(grid) {
    const validate = (r, c) => r >= 0 && r < n && c >= 0 && c < n;
    if (grid[0][0]) return false;
    const n = grid.length, nn = n * n - 1;
    const dr = [-2, -2, -1, -1, 1, 1, 2, 2], dc = [-1, 1, -2, 2, -2, 2, -1, 1];
    for (let r = 0; r < n; r++) {
        L: for (let c = 0; c < n; c++) {
            if (grid[r][c] === nn) continue;
            for (let i = 0; i < 8; i++) {
                const rr = r + dr[i], cc = c + dc[i];
                if (!validate(rr, cc)) continue;
                if (grid[r][c] + 1 === grid[rr][cc]) continue L;
            }
            return false;
        }
        return true;
    }
}
