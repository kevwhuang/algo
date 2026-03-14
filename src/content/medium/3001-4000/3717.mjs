// 3717 - Minimum Operations to Make the Array Beautiful

function minOperations(nums) {
    const m = nums.length, n = 2 * Math.max(...nums) + 1;
    const dp = Array.from({ length: m }, () => new Uint16Array(n).fill(-1));
    dp[0][nums[0]] = 0;
    for (let i = 1; i < m; i++) {
        for (let j = nums[0]; j < n; j++) {
            if (dp[i - 1][j] === 65535) continue;
            for (let k = Math.ceil(nums[i] / j) * j; k < n; k += j) {
                dp[i][k] = Math.min(dp[i - 1][j] + k - nums[i], dp[i][k]);
            }
        }
    }
    return Math.min(...dp[m - 1]);
}
