// 268 - Missing Number

function missingNumber(nums) {
    return nums.reduce((s, e, i) => s ^ e ^ i, nums.length);
}
