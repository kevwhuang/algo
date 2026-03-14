// 1639 - Number of Ways to Form a Target String Given a Dictionary

function numWays(words, target) {
    const m = words[0].length, n = target.length;
    if (m < n) return 0;
    const dp = new Uint32Array(n + 1).fill(1, 0, 1);
    const B = new Uint16Array(26);
    for (let i = 0; i < m; i++) {
        B.fill(0);
        words.forEach(s => B[s.charCodeAt(i) - 97]++);
        for (let j = n - 1; ~j; j--) {
            const key = target.charCodeAt(j) - 97;
            dp[j + 1] = (dp[j + 1] + dp[j] * B[key]) % 1000000007;
        }
    }
    return dp[n];
}
