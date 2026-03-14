// 3135 - Equalize Strings by Adding or Removing Characters at Ends

function minOperations(initial, target) {
    const m = initial.length, n = target.length;
    if (m < n) return minOperations(target, initial);
    let res = 0;
    const dp = new Uint16Array(n);
    for (let i = 0; i < m; i++) {
        for (let prev = 0, j = 0; j < n; j++) {
            const cur = dp[j];
            if (initial[i] !== target[j]) dp[j] = 0;
            else res = Math.max(dp[j] = prev + 1, res);
            prev = cur;
        }
    }
    return m + n - 2 * res;
}
