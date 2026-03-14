// 2855 - Minimum Right Shifts to Sort the Array

function minimumRightShifts(nums) {
    let shift, pivot = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] <= nums[i]) continue;
        if (shift) return -1;
        shift = true, pivot = i;
    }
    if (!shift) return 0;
    return nums[0] < nums.at(-1) ? -1 : nums.length - pivot;
}
