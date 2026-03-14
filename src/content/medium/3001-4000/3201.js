// 3201 - Find the Maximum Length of Valid Subsequence I

function maximumLength(nums) {
    const dp = [(nums[0] + 1) % 2, nums[0] % 2, 1];
    for (let flag = dp[1], i = 1; i < nums.length; i++) {
        dp[nums[i] % 2]++;
        if (nums[i] % 2 === flag) continue;
        dp[2]++, flag = flag ? 0 : 1;
    }
    return Math.max(...dp);
}
