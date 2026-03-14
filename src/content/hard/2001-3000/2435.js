// 2435 - Paths in Matrix Whose Sum Is Divisible by K

function numberOfPaths(grid, k) {
    const M = grid, m = M.length, n = M[0].length;
    let dp1 = Array.from({ length: n }, () => new Array(k).fill(0));
    let dp2 = Array.from({ length: n }, () => new Array(k));
    for (let acc = 0, y = 0; y < n; y++) {
        acc = (acc + M[0][y]) % k;
        dp1[y][acc] = 1;
    }
    for (let cur, acc = M[0][0] % k, x = 1; x < m; x++) {
        acc = (acc + M[x][0]) % k;
        dp2[0].fill(0).fill(1, acc, acc + 1);
        for (let y = 1; y < n; y++) {
            dp2[y].fill(0);
            const a = M[x][y];
            for (let i = 0; i < k; i++) {
                dp2[y][(i + a) % k] = (dp1[y][i] + dp2[y - 1][i]) % 1000000007;
            }
        }
        cur = dp1, dp1 = dp2, dp2 = cur;
    }
    return dp1[n - 1][0];
}
