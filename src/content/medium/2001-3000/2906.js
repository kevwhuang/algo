// 2906 - Construct Product Matrix

function constructProductMatrix(grid) {
    const m = grid.length, n = grid[0].length;
    const prefix = [1];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            prefix.push(prefix[prefix.length - 1] * grid[r][c] % 12345);
        }
    }
    const suffix = [1];
    for (let r = m - 1; r >= 0; r--) {
        for (let c = n - 1; c >= 0; c--) {
            suffix.push(suffix[suffix.length - 1] * grid[r][c] % 12345);
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const i = r * n + c;
            grid[r][c] = prefix[i] * suffix[suffix.length - i - 2] % 12345;
        }
    }
    return grid;
}
