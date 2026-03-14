// 3151 - Special Array I

function isArraySpecial(nums) {
    for (let i = 1; i < nums.length; i++) {
        if ((nums[i - 1] & 1) === (nums[i] & 1)) return false;
    }
    return true;
}
