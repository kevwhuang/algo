// 1155 - Number of Dice Rolls With Target Sum

function numRollsToTarget(n, k, target) {
    const dp = new Uint32Array(target + 1);
    const lim = Math.min(k, target);
    for (let i = 1; i <= lim; i++) {
        dp[i] = 1;
    }
    for (let i = 2; i <= n; i++) {
        for (let j = target; j >= i; j--) {
            dp[j] = 0;
            const lim = Math.min(k, j - i + 1);
            for (let d = 1; d <= lim; d++) {
                dp[j] = (dp[j] + dp[j - d]) % 1000000007;
            }
        }
    }
    return dp[target];
}
