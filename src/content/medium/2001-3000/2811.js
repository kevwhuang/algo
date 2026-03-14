// 2811 - Check If It Is Possible to Split Array

function canSplitArray(nums, m) {
    for (let i = nums.length - 1; i; i--) {
        if (nums[i - 1] + nums[i] >= m) return true;
    }
    return nums.length <= 2;
}
