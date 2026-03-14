// 3674 - Minimum Operations to Equalize Array

function minOperations(nums) {
    let i = 0;
    while (++i < nums.length) if (nums[i - 1] !== nums[i]) return 1;
    return 0;
}
