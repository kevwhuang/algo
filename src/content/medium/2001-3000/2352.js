// 2352 - Equal Row and Column Pairs

function equalPairs(grid) {
    const map = new Map(), n = grid.length;
    for (let r = 0; r < n; r++) {
        const key = String(grid[r]);
        map.set(key, (map.get(key) ?? 0) + 1);
    }
    let res = 0;
    const arr = new Array(n);
    for (let c = 0; c < n; c++) {
        for (let r = 0; r < n; r++) {
            arr[r] = grid[r][c];
        }
        res += map.get(String(arr)) ?? 0;
    }
    return res;
}
