// 3290 - Maximum Multiplication Score

function maxScore(a, b) {
    const dp = [0, -1e11, -1e11, -1e11, -1e11];
    for (let i = 0; i < b.length; i++) {
        for (let j = 4; j; j--) {
            dp[j] = Math.max(dp[j - 1] + a[j - 1] * b[i], dp[j]);
        }
    }
    return dp[4];
}
