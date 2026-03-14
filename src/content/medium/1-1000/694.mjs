// 694 - Number of Distinct Islands

function numDistinctIslands(grid) {
    function dfs(r, c, token) {
        if (r === -1 || r === m || c === -1 || c === n) return hash += ' ';
        if (grid[r][c] === 0) return hash += ' ';
        grid[r][c] = 0;
        hash += token;
        dfs(r - 1, c, 'l');
        dfs(r + 1, c, 'r');
        dfs(r, c - 1, 'u');
        dfs(r, c + 1, 'd');
    }
    const m = grid.length, n = grid[0].length;
    const set = new Set();
    let hash;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            hash = '';
            dfs(r, c, '');
            set.add(hash);
        }
    }
    return set.size;
}
