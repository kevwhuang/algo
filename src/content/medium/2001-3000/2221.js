// 2221 - Find Triangular Sum of an Array

function triangularSum(nums) {
    while (nums.length > 1) {
        const newNums = new Array(nums.length - 1);
        for (let i = 0; i < nums.length - 1; i++) {
            newNums[i] = (nums[i] + nums[i + 1]) % 10;
        }
        nums = newNums;
    }
    return nums[0];
}
