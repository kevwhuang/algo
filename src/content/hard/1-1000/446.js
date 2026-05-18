// 446. Arithmetic Slices II - Subsequence

function numberOfArithmeticSlices(nums) {
    let res = 0;
    const dp = Array.from({ length: nums.length }, () => new Map());
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const d = nums[i] - nums[j], cur = dp[j].get(d) ?? 0;
            res += cur;
            dp[i].set(d, (dp[i].get(d) ?? 0) + cur + 1);
        }
    }
    return res;
}
