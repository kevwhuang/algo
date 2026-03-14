// 665 - Non-Decreasing Array

function checkPossibility(nums) {
    let modified = false;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] <= nums[i]) continue;
        if (nums[i - 2] > nums[i]) nums[i] = nums[i - 1];
        if (modified) return false;
        modified = true;
    }
    return true;
}
