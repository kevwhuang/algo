// 2140 - Solving Questions With Brainpower

function mostPoints(questions) {
    const arr = questions, n = arr.length, dp = new Array(n + 1);
    dp[n] = 0;
    for (let i = n - 1; ~i; i--) {
        const j = arr[i][1] + i + 1;
        dp[i] = Math.max((j < n ? dp[j] : 0) + arr[i][0], dp[i + 1]);
    }
    return dp[0];
}
