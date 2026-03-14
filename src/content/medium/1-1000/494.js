// 494 - Target Sum

function findTargetSumWays(nums, target) {
    const n = nums.reduce((s, e) => s + e, target) / 2;
    if (n < 0 || n > n >> 0) return 0;
    const dp = new Uint32Array(n + 1);
    dp[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        for (let j = n; j >= cur; j--) {
            dp[j] += dp[j - cur];
        }
    }
    return dp[n];
}
