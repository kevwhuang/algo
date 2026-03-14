// 474 - Ones and Zeros

function findMaxForm(strs, m, n) {
    const dp = Array.from({ length: m + 1 }, () => new Uint8Array(n + 1));
    for (let i = 0; i < strs.length; i++) {
        let zeros = 0;
        const s = strs[i];
        for (let j = 0; j < s.length; j++) {
            if (s[j] === '0') zeros++;
        }
        const ones = s.length - zeros;
        if (ones > n) continue;
        for (let j = m; j >= zeros; j--) {
            for (let k = n; k >= ones; k--) {
                dp[j][k] = Math.max(dp[j - zeros][k - ones] + 1, dp[j][k]);
            }
        }
    }
    return dp[m][n];
}
