// 2784 - Check If Array Is Good

function isGood(nums) {
    nums.sort((a, b) => a - b);
    if (nums[nums.length - 1] !== nums.length - 1) return false;
    for (let i = 1; i < nums.length; i++) {
        if (i !== nums[i - 1]) return false;
    }
    return true;
}
