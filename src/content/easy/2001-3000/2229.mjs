// 2229 - Check If an Array Is Consecutive

function isConsecutive(nums) {
    nums.sort((a, b) => a - b);
    const min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== min + i) return false;
    }
    return true;
}
