// 2328 - Number of Increasing Paths in a Grid

function countPaths(grid) {
    function dfs(r, c, prev) {
        if (r < 0 || r === m || c < 0 || c === n) return 0;
        const cur = M[r][c];
        if (cur <= prev) return 0;
        if (memo[r][c]) return memo[r][c];
        let sum = 1;
        sum = (sum + dfs(r - 1, c, cur)) % mod;
        sum = (sum + dfs(r + 1, c, cur)) % mod;
        sum = (sum + dfs(r, c - 1, cur)) % mod;
        sum = (sum + dfs(r, c + 1, cur)) % mod;
        return memo[r][c] = sum;
    }
    let res = 0;
    const M = grid, m = M.length, n = M[0].length, mod = 1000000007;
    const memo = Array.from({ length: m }, () => new Uint32Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            res = (res + dfs(r, c, 0)) % mod;
        }
    }
    return res;
}
