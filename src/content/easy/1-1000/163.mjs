// 163 - Missing Ranges

function findMissingRanges(nums, lower, upper) {
    if (nums.length === 0) return [[lower, upper]];
    const res = [];
    if (nums[0] > lower) res.push([lower, nums[0] - 1]);
    for (let i = 1; i < nums.length; i++) {
        const a = nums[i - 1], b = nums[i];
        if (b - a > 1) res.push([a + 1, b - 1]);
    }
    if (nums.at(-1) < upper) res.push([nums.at(-1) + 1, upper]);
    return res;
}
