// 712 - Minimum ASCII Delete Sum for Two Strings

function minimumDeleteSum(s1, s2) {
    let sum = 0;
    const m = s1.length, n = s2.length;
    const dp = new Uint32Array(n);
    for (let i = 0; i < m; i++) {
        sum += s1.charCodeAt(i);
        for (let prev = 0, j = 0; j < n; j++) {
            if (i === 0) sum += s2.charCodeAt(j);
            const cur = dp[j];
            if (s1[i] === s2[j]) dp[j] = prev + s1.charCodeAt(i);
            else if (j) dp[j] = Math.max(dp[j - 1], dp[j]);
            prev = cur;
        }
    }
    return sum - 2 * dp[n - 1];
}
