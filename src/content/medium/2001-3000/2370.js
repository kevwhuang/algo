// 2370 - Longest Ideal Subsequence

function longestIdealString(s, k) {
    const dp = new Uint32Array(26);
    for (let i = 0; i < s.length; i++) {
        const key = s.charCodeAt(i) - 97;
        const min = Math.min(key + k, 25);
        let max = 1, j = Math.max(0, key - k);
        while (j <= min) max = Math.max(dp[j++] + 1, max);
        dp[key] = max;
    }
    return dp.reduce((s, e) => Math.max(e, s));
}
