// 329 - Longest Increasing Path in a Matrix

function longestIncreasingPath(matrix) {
    function dfs(r, c, prev) {
        if (r === -1 || r === m || c === -1 || c === n) return 0;
        if (M[r][c] <= prev) return 0;
        if (memo[r][c]) return memo[r][c];
        const up = dfs(r - 1, c, M[r][c]);
        const down = dfs(r + 1, c, M[r][c]);
        const left = dfs(r, c - 1, M[r][c]);
        const right = dfs(r, c + 1, M[r][c]);
        return memo[r][c] = Math.max(up, down, left, right) + 1;
    }
    let res = 1;
    const M = matrix, m = M.length, n = M[0].length;
    const memo = Array.from({ length: m }, () => new Uint16Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            res = Math.max(dfs(r, c, -1), res);
        }
    }
    return res;
}
