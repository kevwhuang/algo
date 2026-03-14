// 3142 - Check If Grid Satisfies Conditions

function satisfiesConditions(grid) {
    const m = grid.length - 1, n = grid[0].length - 1;
    for (let r = 0; r <= m; r++) {
        for (let c = 0; c <= n; c++) {
            const cur = grid[r][c];
            if (r < m && cur !== grid[r + 1][c]) return false;
            if (c < n && cur === grid[r][c + 1]) return false;
        }
    }
    return true;
}
