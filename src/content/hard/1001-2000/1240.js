// 1240 - Tiling a Rectangle With the Fewest Squares

function tilingRectangle(n, m) {
    function dfs(m, n) {
        if (m > n) return dfs(n, m);
        if (m === 0) return 0;
        if (m === 1) return n;
        if (memo[m][n]) return memo[m][n];
        let min = Infinity;
        for (let d = 1; d <= m; d++) {
            for (let r = 0; r <= m - d; r++) {
                for (let c = 0; c <= n - d; c++) {
                    const up = dfs(r, c + d);
                    const down = dfs(m - r - d, n - c);
                    const left = dfs(m - r, c);
                    const right = dfs(r + d, n - c - d);
                    min = Math.min(up + down + left + right + 1, min);
                }
            }
        }
        return memo[m][n] = min;
    }
    const memo = Array.from({ length: 14 }, () => new Uint8Array(14));
    return dfs(m, n);
}
