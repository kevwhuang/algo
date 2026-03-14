// 3654 - Minimum Sum After Divisible Sum Deletions

function minArraySum(nums, k) {
    const dp = new Array(k).fill(1e11);
    dp[0] = 0;
    let res = 0, i = -1;
    while (++i < nums.length) {
        res += nums[i], res = dp[res % k] = Math.min(res, dp[res % k]);
    }
    return res;
}
