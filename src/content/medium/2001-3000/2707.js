// 2707 - Extra Characters in a String

function minExtraChar(s, dictionary) {
    const n = s.length, dp = new Uint8Array(n + 1);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
        for (let j = 0; j < dictionary.length; j++) {
            if (!s.endsWith(dictionary[j], i)) continue;
            dp[i] = Math.min(dp[i - dictionary[j].length], dp[i]);
        }
    }
    return dp[n];
}
