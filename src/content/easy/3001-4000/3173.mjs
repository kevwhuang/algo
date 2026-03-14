// 3173 - Bitwise OR of Adjacent Elements

function orArray(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i - 1] |= nums[i];
    }
    nums.pop();
    return nums;
}
