// 1746 - Maximum Subarray Sum After One Operation

function maxSumAfterOperation(nums) {
    let res = 0, max1 = 0, max2 = 0, i = -1;
    while (++i < nums.length) {
        max1 = Math.max(max1 + nums[i], max2 + nums[i] ** 2);
        max2 = Math.max(0, max2 + nums[i]);
        res = Math.max(max1, res);
    }
    return res;
}
