// 3619 - Count Islands With Total Value Divisible by K

function countIslands(grid, k) {
    function dfs(r, c) {
        if (M[r][c] === 0) return;
        acc += M[r][c], M[r][c] = 0;
        if (r) dfs(r - 1, c);
        if (r + 1 < m) dfs(r + 1, c);
        if (c) dfs(r, c - 1);
        if (c + 1 < n) dfs(r, c + 1);
    }
    let res = 0, acc;
    const M = grid, m = M.length, n = M[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] === 0) continue;
            acc = 0;
            dfs(r, c);
            if (acc % k === 0) res++;
        }
    }
    return res;
}
