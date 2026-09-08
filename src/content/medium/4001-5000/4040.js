// 4040. Minimum Operations to Form Subset Sum I

function minOperations(nums, sum) {
    if (!this.dp) dp = new Uint32Array(5001);
    dp.fill(1e9, 1, sum + 1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = sum; j; j--) {
            for (let acc = 0, k = nums[i]; k; acc++, k >>= 1) {
                if (k <= j) dp[j] = Math.min(dp[j - k] + acc, dp[j]);
            }
            for (let acc = 1, k = 2 * nums[i]; k <= j; acc++, k *= 2) {
                dp[j] = Math.min(dp[j - k] + acc, dp[j]);
            }
        }
    }
    return dp[sum] < 1e9 ? dp[sum] : -1;
}
