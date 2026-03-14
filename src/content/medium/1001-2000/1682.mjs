// 1682 - Longest Palindromic Subsequence II

function longestPalindromeSubseq(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => new Uint8Array(27));
    for (let i = n - 1; ~i; i--) {
        const key = s.charCodeAt(i) - 97;
        for (let j = i + 1; j < n; j++) {
            for (let k = 0; k <= 26; k++) {
                if (k === key) continue;
                if (s[i] === s[j]) dp[j][k] = dp[j - 1][key] + 2;
                else dp[j][k] = Math.max(dp[j - 1][k], dp[j][k]);
            }
        }
    }
    return dp[n - 1][26];
}
