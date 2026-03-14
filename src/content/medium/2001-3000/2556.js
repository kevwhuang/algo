// 2556 - Disconnect Path in a Binary Matrix by at Most One Flip

function isPossibleToCutPath(grid) {
    function dfs(r, c) {
        if (r === m || c === n || grid[r][c] === 0) return;
        if (r === m - 1 && c === n - 1) return true;
        grid[r][c] = 0;
        return dfs(r + 1, c) || dfs(r, c + 1);
    }
    const m = grid.length, n = grid[0].length;
    if (!dfs(0, 0)) return true;
    grid[0][0] = 1;
    return !dfs(0, 0);
}
