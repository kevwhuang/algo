// 417 - Pacific Atlantic Water Flow

function pacificAtlantic(heights) {
    function dfs(r, c, prev, seen) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (seen[r][c] || M[r][c] < prev) return;
        seen[r][c] = 1;
        dfs(r - 1, c, M[r][c], seen);
        dfs(r + 1, c, M[r][c], seen);
        dfs(r, c - 1, M[r][c], seen);
        dfs(r, c + 1, M[r][c], seen);
    }
    const M = heights, m = M.length, n = M[0].length;
    const seen1 = Array.from({ length: m }, () => new Uint8Array(n));
    const seen2 = Array.from({ length: m }, () => new Uint8Array(n));
    M.forEach((_, r) => dfs(r, 0, -1, seen1) || dfs(r, n - 1, -1, seen2));
    M[0].forEach((_, c) => dfs(0, c, -1, seen1) || dfs(m - 1, c, -1, seen2));
    const res = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (seen1[r][c] && seen2[r][c]) res.push([r, c]);
        }
    }
    return res;
}
