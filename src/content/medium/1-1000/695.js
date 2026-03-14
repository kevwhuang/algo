// 695 - Max Area of Island

function maxAreaOfIsland(grid) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (grid[r][c] === 0) return;
        grid[r][c] = 0, acc++;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    let res = 0, acc;
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            acc = 0;
            dfs(r, c);
            res = Math.max(acc, res);
        }
    }
    return res;
}
