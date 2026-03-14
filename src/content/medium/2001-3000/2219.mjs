// 2219 - Maximum Sum Score of Array

function maximumSumScore(nums) {
    let max = -Infinity;
    let left = 0, right = nums.reduce((s, e) => s + e);
    for (let i = 0; i < nums.length; i++) {
        left += nums[i];
        max = Math.max(left, right, max);
        right -= nums[i];
    }
    return max;
}
