// 1909 - Remove One Element to Make the Array Strictly Increasing

function canBeIncreasing(nums) {
    for (let flag, i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) continue;
        if (flag) return false;
        flag = true;
        if (nums[i - 2] >= nums[i]) nums[i] = nums[i - 1];
    }
    return true;
}
