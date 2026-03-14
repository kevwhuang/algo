// 2873 - Maximum Value of an Ordered Triplet I

function maximumTripletValue(nums) {
    const postMax = new Array(nums.length);
    for (let i = nums.length - 1; i >= 2; i--) {
        postMax[i] = Math.max(nums[i], postMax[i + 1] || 0);
    }
    let max = 0, preMax = -Infinity;
    for (let i = 1; i < nums.length - 1; i++) {
        preMax = Math.max(nums[i - 1], preMax);
        max = Math.max((preMax - nums[i]) * postMax[i + 1], max);
    }
    return max;
}
