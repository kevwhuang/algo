// 1020 - Number of Enclaves

function numEnclaves(grid) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return flag = false;
        if (grid[r][c] === 0) return;
        grid[r][c] = 0;
        localCells++;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const m = grid.length, n = grid[0].length;
    let cells = 0, localCells, flag;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            localCells = 0;
            flag = true;
            dfs(r, c);
            if (flag) cells += localCells;
        }
    }
    return cells;
}
