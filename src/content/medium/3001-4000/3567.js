// 3567 - Minimum Absolute Difference in Sliding Submatrix

function minAbsDiff(grid, k) {
    const m = grid.length - k, n = grid[0].length - k;
    const res = Array.from({ length: m + 1 }, () => new Uint32Array(n + 1));
    const arr = new Int32Array(k * k);
    for (let r = 0; r <= m; r++) {
        for (let c = 0; c <= n; c++) {
            for (let i = 0, rr = r; rr < r + k; rr++) {
                for (let cc = c; cc < c + k; cc++) {
                    arr[i++] = grid[rr][cc];
                }
            }
            arr.sort();
            let min = Infinity, i = 0;
            while (++i < arr.length) {
                const a = arr[i - 1], b = arr[i];
                if (a < b) min = Math.min(b - a, min);
            }
            res[r][c] = min < Infinity ? min : 0;
        }
    }
    return res;
}
