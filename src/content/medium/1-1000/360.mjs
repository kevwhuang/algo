// 360 - Sort Transformed Array

function sortTransformedArray(nums, a, b, c) {
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        nums[i] = a * x * x + b * x + c;
    }
    return nums.sort((a, b) => a - b);
}
