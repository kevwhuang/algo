// 3496 - Maximize Score After Pair Deletions

function maxScore(nums) {
    const sum = nums.reduce((s, e) => s + e);
    if (nums.length % 2) return sum - nums.reduce((s, e) => Math.min(e, s));
    let min = Infinity, i = 0;
    while (++i < nums.length) min = Math.min(nums[i - 1] + nums[i], min);
    return sum - min;
}
