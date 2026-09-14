// 4052. Cyclically Shift Rows and Columns

function cyclicShift(n, grid, rowShift, colShift) {
    if (!this.M) M = Array.from({ length: 10 }, () => new Uint8Array(10));
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            M[x][(y - rowShift[x] + n) % n] = grid[x][y];
        }
    }
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            grid[(x - colShift[y] + n) % n][y] = M[x][y];
        }
    }
    return grid;
}
