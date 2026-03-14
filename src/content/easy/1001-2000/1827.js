// 1827 - Minimum Operations to Make the Array Increasing

function minOperations(nums) {
    let ops = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) continue;
        ops += nums[i - 1] - nums[i] + 1;
        nums[i] = nums[i - 1] + 1;
    }
    return ops;
}
