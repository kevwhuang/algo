// 3423 - Maximum Difference Between Adjacent Elements in a Circular Array

function maxAdjacentDistance(nums) {
    let res = Math.abs(nums[0] - nums.at(-1)), i = 0;
    while (++i < nums.length) {
        res = Math.max(Math.abs(nums[i - 1] - nums[i]), res);
    }
    return res;
}
