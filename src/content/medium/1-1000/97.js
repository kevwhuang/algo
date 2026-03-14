// 97 - Interleaving String

function isInterleave(s1, s2, s3) {
    const m = s1.length, n = s2.length;
    if (m + n !== s3.length) return false;
    const dp = new Uint8Array(n + 1);
    dp[0] = 1;
    for (let i = 0; i < n; i++) {
        dp[i + 1] = dp[i] && s2[i] === s3[i];
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j <= n; j++) {
            dp[j] &&= s1[i] === s3[i + j];
            dp[j] ||= j && dp[j - 1] && s2[j - 1] === s3[i + j];
        }
    }
    return dp[n];
}
