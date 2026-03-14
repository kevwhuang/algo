// 3196 - Maximize Total Cost of Alternating Subarrays

function maximumTotalCost(nums) {
    let a = nums[0], b = nums[0], i = 0;
    while (++i < nums.length) {
        const max = Math.max(a, b);
        a = b - nums[i], b = max + nums[i];
    }
    return Math.max(a, b);
}
