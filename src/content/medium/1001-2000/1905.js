// 1905 - Count Sub Islands

function countSubIslands(grid1, grid2) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (grid2[r][c] === 0) return;
        if (grid1[r][c] === 0) isSubisland = false;
        grid2[r][c] = 0;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const m = grid1.length, n = grid1[0].length;
    let subislands = 0, isSubisland;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid2[r][c] === 0) continue;
            isSubisland = true;
            dfs(r, c);
            if (isSubisland) subislands++;
        }
    }
    return subislands;
}
