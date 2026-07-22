// 3979. Maximum Valid Pair Sum

function maxValidPairSum(nums, k) {
    let res = 0;
    for (let max = 0, i = k; i < nums.length; i++) {
        max = Math.max(nums[i - k], max);
        res = Math.max(nums[i] + max, res);
    }
    return res;
}
