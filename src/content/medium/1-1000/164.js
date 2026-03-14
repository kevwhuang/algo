// 164 - Maximum Gap

function maximumGap(nums) {
    nums.sort((a, b) => a - b);
    let maxDiff = 0;
    for (let i = 1; i < nums.length; i++) {
        maxDiff = Math.max(nums[i] - nums[i - 1], maxDiff);
    }
    return maxDiff;
}
