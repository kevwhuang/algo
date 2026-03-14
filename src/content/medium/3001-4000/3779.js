// 3779 - Minimum Number of Operations to Have Distinct Elements

function minOperations(nums) {
    const seen = new Set();
    let i = nums.length;
    while (~--i && !seen.has(nums[i])) seen.add(nums[i]);
    return Math.ceil((i + 1) / 3);
}
