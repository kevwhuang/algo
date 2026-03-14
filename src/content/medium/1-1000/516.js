// 516 - Longest Palindromic Subsequence

function longestPalindromeSubseq(s) {
    const dp = new Uint16Array(s.length).fill(1);
    for (let i = 0; i < s.length; i++) {
        for (let prev = 0, j = i - 1; ~j; j--) {
            const cur = dp[j];
            dp[j] = s[i] === s[j] ? prev + 2 : Math.max(dp[j + 1], dp[j]);
            prev = cur;
        }
    }
    return dp[0];
}
