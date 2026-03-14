// 1102 - Path With Maximum Minimum Value

function maximumMinimumPath(grid) {
    function dfs(r, c) {
        if (seen[m][n] || seen[r][c]) return;
        seen[r][c] = 1;
        if (grid[r][c] < arr[mid]) return;
        if (r) dfs(r - 1, c);
        if (r < m) dfs(r + 1, c);
        if (c) dfs(r, c - 1);
        if (c < n) dfs(r, c + 1);
    }
    const set = new Set();
    const m = grid.length - 1, n = grid[0].length - 1;
    const bound = Math.min(grid[0][0], grid[m][n]);
    for (let r = 0; r <= m; r++) {
        for (let c = 0; c <= n; c++) {
            if (grid[r][c] <= bound) set.add(grid[r][c]);
        }
    }
    const arr = new Uint32Array(set).sort();
    let mid, seen, l = 0, r = arr.length - 1;
    while (l <= r) {
        mid = l + r >> 1;
        seen = Array.from({ length: m + 1 }, () => new Uint8Array(n + 1));
        dfs(0, 0);
        if (seen[m][n]) l = mid + 1;
        else r = mid - 1;
    }
    return arr[r];
}
