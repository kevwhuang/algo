// 583 - Delete Operation for Two Strings

function minDistance(word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = new Uint16Array(n);
    for (let i = 0; i < m; i++) {
        for (let prev = 0, j = 0; j < n; j++) {
            const cur = dp[j];
            if (word1[i] === word2[j]) dp[j] = prev + 1;
            else if (j) dp[j] = Math.max(dp[j - 1], dp[j]);
            prev = cur;
        }
    }
    return m + n - 2 * dp[n - 1];
}
