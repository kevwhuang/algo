// 10 - Regular Expression Matching

function isMatch(s, p) {
    const m = s.length, n = p.length;
    const dp = new Uint8Array(n + 1);
    dp[0] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = p[i - 1] === '*' && dp[i - 2];
    }
    dp[0] = 0;
    for (let i = 0; i < m; i++) {
        for (let prev = i === 0, j = 1; j <= n; j++) {
            const cur = dp[j];
            dp[j] = s[i] === p[j - 1] && prev;
            dp[j] ||= p[j - 1] === '.' && prev;
            prev = cur;
            if (p[j - 1] !== '*') continue;
            dp[j] ||= dp[j - 2];
            dp[j] ||= s[i] === p[j - 2] && cur;
            dp[j] ||= p[j - 2] === '.' && cur;
        }
    }
    return dp[n];
}
