// 2684 - Maximum Number of Moves in a Grid

function maxMoves(grid) {
    function dfs(r, c, prev, dist) {
        if (grid[r][c] <= prev) return;
        if (seen[r][c]) return;
        seen[r][c] = 1;
        if (dist > max) max = dist;
        if (c + 1 === n) return;
        if (r) dfs(r - 1, c + 1, grid[r][c], dist + 1);
        dfs(r, c + 1, grid[r][c], dist + 1);
        if (r + 1 < m) dfs(r + 1, c + 1, grid[r][c], dist + 1);
    }
    let max = 0;
    const m = grid.length, n = grid[0].length;
    const seen = Array.from({ length: m }, () => new Uint8Array(n));
    for (let r = 0; r < m; r++) {
        dfs(r, 0, 0, 0);
    }
    return max;
}
