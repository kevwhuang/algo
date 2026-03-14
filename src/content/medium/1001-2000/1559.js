// 1559 - Detect Cycles in 2D Grid

function containsCycle(grid) {
    function dfs(r, c, prevR, prevC, char) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (grid[r][c] !== char) return;
        if (seen[r][c]) return true;
        seen[r][c] = 1;
        for (let i = 0; i < 4; i++) {
            const rr = r + dirs[i][0], cc = c + dirs[i][1];
            if (rr === prevR && cc === prevC) continue;
            if (dfs(rr, cc, r, c, char)) return true;
        }
    }
    const m = grid.length, n = grid[0].length;
    const seen = Array.from({ length: m }, () => new Uint8Array(n));
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (seen[r][c]) continue;
            if (dfs(r, c, -1, -1, grid[r][c])) return true;
        }
    }
    return false;
}
