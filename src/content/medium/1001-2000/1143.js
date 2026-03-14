// 1143 - Longest Common Subsequence

function longestCommonSubsequence(text1, text2) {
    if (!this.dp) dp = new Uint16Array(1001);
    const m = text1.length, n = text2.length;
    dp.fill(0, 0, n + 1);
    for (let i = 0; i < m; i++) {
        for (let prev = 0, j = 1; j <= n; j++) {
            const cur = dp[j];
            if (text1[i] === text2[j - 1]) dp[j] = prev + 1;
            else dp[j] = Math.max(dp[j - 1], dp[j]);
            prev = cur;
        }
    }
    return dp[n];
}
