// 1913 - Maximum Product Difference Between Two Pairs

function maxProductDifference(nums) {
    nums = new Uint16Array(nums).sort();
    return nums.at(-2) * nums.at(-1) - nums[0] * nums[1];
}
