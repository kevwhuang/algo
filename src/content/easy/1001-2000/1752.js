// 1752 - Check If Array Is Sorted and Rotated

function check(nums) {
    let flag, i = 0;
    while (++i < nums.length) {
        if (nums[i - 1] > nums[i] && flag) return false;
        if (nums[i - 1] > nums[i]) flag = true;
        if (flag && nums[0] < nums[i]) return false;
    }
    return true;
}
