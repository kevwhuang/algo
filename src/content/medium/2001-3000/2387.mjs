// 2387 - Median of a Row Wise Sorted Matrix

function matrixMedian(grid) {
    const m = grid.length, n = grid[0].length;
    let min = Infinity, max = -Infinity;
    for (let row = 0; row < m; row++) {
        min = Math.min(grid[row][0], min);
        max = Math.max(grid[row][n - 1], max);
    }
    const target = m * n / 2 + .5;
    while (min < max) {
        const mid = min + ~~((max - min) / 2);
        let count = 0;
        for (let row = 0; row < m; row++) {
            let l = 0, r = n;
            while (l < r) {
                const m = l + ~~((r - l) / 2);
                if (grid[row][m] <= mid) l = m + 1;
                else r = m;
            }
            count += l;
        }
        if (count < target) min = mid + 1;
        else max = mid;
    }
    return min;
}
