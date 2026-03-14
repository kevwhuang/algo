// 115 - Distinct Subsequences

function numDistinct(s, t) {
    const m = s.length, n = t.length;
    const dp = new Uint32Array(n);
    for (let i = 0; i < m; i++) {
        for (let prev = 1, j = 0; j < n; j++) {
            const cur = dp[j];
            dp[j] += s[i] === t[j] && prev;
            prev = cur;
        }
    }
    return dp[n - 1];
}
