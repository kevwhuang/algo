// 3651 - Minimum Cost Path With Teleportations

function minCost(grid, k) {
    const m = grid.length, n = grid[0].length, nn = m * n;
    const dp = new Uint32Array(nn).fill(1e9, 1);
    const arr = grid.flat();
    const B = {};
    arr.forEach(e => B[e] = 0);
    const next = Array.from({ length: nn }, (_, i) => i);
    next.sort((a, b) => arr[b] - arr[a]);
    while (true) {
        for (let i = 1; i < nn; i++) {
            if (i >= n) dp[i] = Math.min(dp[i - n] + arr[i], dp[i]);
            if (i % n) dp[i] = Math.min(dp[i - 1] + arr[i], dp[i]);
        }
        if (k-- === 0) break;
        for (const e in B) {
            B[e] = 1e9;
        }
        for (let i = 0; i < nn; i++) {
            B[arr[i]] = Math.min(dp[i], B[arr[i]]);
        }
        for (let min = 1e9, i = 0; i < nn; i++) {
            min = Math.min(B[arr[next[i]]], min);
            dp[next[i]] = Math.min(min, dp[next[i]]);
        }
    }
    return dp[nn - 1];
}
