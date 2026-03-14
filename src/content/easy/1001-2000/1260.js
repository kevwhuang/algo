// 1260 - Shift 2D Grid

function shiftGrid(grid, k) {
    const m = grid.length, n = grid[0].length, mod = m * n;
    k %= mod;
    if (k === 0) return grid;
    const res = Array.from({ length: m }, () => new Int16Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            res[k / n >> 0][cc = k % n] = grid[r][c];
            k = (k + 1) % mod;
        }
    }
    return res;
}
