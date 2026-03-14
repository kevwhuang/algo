// 1230 - Toss Strange Coins

function probabilityOfHeads(prob, target) {
    const n = prob.length, dp = new Float32Array(n + 1);
    dp[0] = 1;
    for (let i = 0; i < n; i++) {
        const a = prob[i], b = 1 - a;
        for (let j = Math.min(i, target) + 1; j; j--) {
            dp[j] += a * dp[j - 1];
            dp[j - 1] *= b;
        }
    }
    return dp[target];
}
