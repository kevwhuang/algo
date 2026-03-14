// 778 - Swim in Rising Water

function swimInWater(grid) {
    function dfs(r, c) {
        if (r === -1 || r === n || c === -1 || c === n) return;
        if (seen[r][c] || grid[r][c] > m) return;
        if (r === nn && c === nn) return true;
        seen[r][c] = 1;
        return dfs(r - 1, c) || dfs(r + 1, c) || dfs(r, c - 1) || dfs(r, c + 1);
    }
    const n = grid.length, nn = n - 1;
    let l = 0, r = n * n - 1, seen, m;
    while (l < r) {
        seen = Array.from({ length: n }, () => new Uint8Array(n));
        m = l + r >> 1;
        if (!dfs(0, 0)) l = m + 1;
        else r = m;
    }
    return l;
}
