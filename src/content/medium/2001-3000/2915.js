// 2915 - Length of the Longest Subsequence That Sums to Target

function lengthOfLongestSubsequence(nums, target) {
    const dp = new Uint16Array(target + 1);
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        for (let j = target - cur; j > 0; j--) {
            if (dp[j]) dp[j + cur] = Math.max(dp[j] + 1, dp[j + cur]);
        }
        dp[cur] ||= 1;
    }
    return dp[target] || -1;
}
