// 72 - Edit Distance

function minDistance(word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) {
        for (let prev = dp[0]++, j = 1; j <= n; j++) {
            const cur = dp[j];
            if (word1[i - 1] === word2[j - 1]) dp[j] = prev;
            else dp[j] = Math.min(prev, dp[j - 1], dp[j]) + 1;
            prev = cur;
        }
    }
    return dp[n];
}
