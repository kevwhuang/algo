// 1039 - Minimum Score Triangulation of Polygon

function minScoreTriangulation(values) {
    function dfs(l, r) {
        if (r - l === 1) return 0;
        if (memo[l][r]) return memo[l][r];
        let min = Infinity, m = l;
        while (++m < r) {
            const prod = values[l] * values[m] * values[r];
            min = Math.min(prod + dfs(l, m) + dfs(m, r), min);
        }
        return memo[l][r] = min;
    }
    const n = values.length;
    const memo = Array.from({ length: n }, () => new Uint32Array(n));
    return dfs(0, n - 1);
}
