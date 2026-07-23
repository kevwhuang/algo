// 3976. Maximum Subarray Sum After Multiplier

function maxSubarraySum(nums, k) {
    let res = -Infinity;
    for (let acc1 = 0, acc2 = 0, acc3 = 0, i = 0; i < nums.length; i++) {
        acc1 = Math.max(acc2, acc1) + nums[i];
        acc2 = Math.max(acc3, acc2) + Math.trunc(nums[i] / k);
        acc3 = Math.max(nums[i], acc3 + nums[i]);
        res = Math.max(acc1, acc2, k * acc3, res);
        acc3 = Math.max(0, acc3);
    }
    return res;
}
