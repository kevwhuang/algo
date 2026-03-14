// 300 - Longest Increasing Subsequence

function lengthOfLIS(nums) {
    const dp = [];
    for (let i = 0; i < nums.length; i++) {
        let l = 0, r = dp.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (dp[m] < nums[i]) l = m + 1;
            else r = m - 1;
        }
        dp[l] = nums[i];
    }
    return dp.length;
}
