// 1340 - Jump Game V

function maxJumps(arr, d) {
    const n = arr.length;
    const dp = new Uint16Array(n).fill(1);
    const ind = Array.from({ length: n }, (_, i) => i);
    ind.sort((a, b) => arr[b] - arr[a]);
    for (let i = 0; i < n; i++) {
        const m = ind[i], next = dp[m] + 1;
        const max = Math.max(m - d, 0);
        for (let l = m - 1; l >= max && arr[l] < arr[m]; l--) {
            dp[l] = Math.max(next, dp[l]);
        }
        const min = Math.min(m + d, n - 1);
        for (let r = m + 1; r <= min && arr[r] < arr[m]; r++) {
            dp[r] = Math.max(next, dp[r]);
        }
    }
    return dp.reduce((s, e) => Math.max(e, s));
}
