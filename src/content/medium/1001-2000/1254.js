// 1254 - Number of Closed Islands

function closedIsland(grid) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) {
            isClosed = false;
            return;
        }
        if (grid[r][c] === 1) return;
        grid[r][c] = 1;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const m = grid.length, n = grid[0].length;
    let islands = 0, isClosed;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) continue;
            isClosed = true;
            dfs(r, c);
            if (isClosed) islands++;
        }
    }
    return islands;
}
