// 2460 - Apply Operations to an Array

function applyOperations(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) continue;
        nums[i - 1] *= 2;
        nums[i++] = 0;
    }
    return nums.sort((a, b) => !a - !b);
}
