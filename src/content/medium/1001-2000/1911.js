// 1911 - Maximum Alternating Subsequence Sum

function maxAlternatingSum(nums) {
    let res = nums[0], i = 0;
    const n = nums.length;
    while (++i < n) res += Math.max(0, nums[i] - nums[i - 1]);
    return res;
}
