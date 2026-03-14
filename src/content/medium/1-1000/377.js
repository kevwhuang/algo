// 377 - Combination Sum IV

function combinationSum4(nums, target) {
    const dp = new Uint32Array(target + 1);
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > i) continue;
            dp[i] += dp[i - nums[j]];
        }
    }
    return dp[target];
}
