// 1219 - Path With Maximum Gold

function getMaximumGold(grid) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return 0;
        if (grid[r][c] === 0) return 0;
        const gold = grid[r][c];
        grid[r][c] = 0;
        const up = dfs(r - 1, c);
        const down = dfs(r + 1, c);
        const left = dfs(r, c - 1);
        const right = dfs(r, c + 1);
        grid[r][c] = gold;
        return gold + Math.max(up, down, left, right);
    }
    let max = 0;
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            max = Math.max(dfs(r, c), max);
        }
    }
    return max;
}
