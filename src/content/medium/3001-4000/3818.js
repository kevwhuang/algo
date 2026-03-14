// 3818 - Minimum Prefix Removal to Make Array Strictly Increasing

function minimumPrefixLength(nums) {
    let i = nums.length - 1;
    while (i && nums[i - 1] < nums[i]) i--;
    return i;
}
