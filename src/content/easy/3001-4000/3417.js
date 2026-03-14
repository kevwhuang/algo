// 3417 - Zigzag Grid Traversal With Skip

function zigzagTraversal(grid) {
    const m = grid.length, n = grid[0].length;
    const a = Math.ceil(m / 2) * Math.ceil(n / 2);
    const b = (m >> 1) * (n >> 1);
    const res = new Uint16Array(a + b);
    for (let d = 2, i = 0, r = 0; r < m; d *= -1, r++) {
        const cc = r & 1 ? n & 1 ? n - 2 : n - 1 : 0;
        for (let c = cc; ~c && c < n; i++, c += d) {
            res[i] = grid[r][c];
        }
    }
    return res;
}
