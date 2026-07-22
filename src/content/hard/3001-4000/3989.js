// 3989. Maximum Consistent Columns in a Grid

function maxConsistentColumns(grid, limit) {
    if (!this.A) A = new Int32Array(62500);
    const M = grid, m = M.length, n = M[0].length;
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            A[n * x + y] = M[x][y];
        }
    }
    const adj = Array.from({ length: n }, () => []);
    for (let y = 0; y < n; y++) {
        for (let yy = y + 1; yy < n; yy++) {
            let x = -1;
            while (++x < m) {
                if (Math.abs(A[n * x + y] - A[n * x + yy]) > limit) break;
            }
            if (x === m) adj[y].push(yy);
        }
    }
    let res = 1;
    const dp = new Uint8Array(n).fill(1);
    for (let y = 0; y < n; y++) {
        const next = adj[y];
        for (let i = 0; i < next.length; i++) {
            const yy = next[i];
            dp[yy] = Math.max(dp[y] + 1, dp[yy]);
            res = Math.max(dp[yy], res);
        }
    }
    return res;
}
