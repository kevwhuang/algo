// 152 - Maximum Product Subarray

function maxProduct(nums) {
    let res = nums[0], min = res, max = res, cur, i = 0;
    while (++i < nums.length) {
        if (nums[i] < 0) cur = min, min = max, max = cur;
        min = Math.min(nums[i], nums[i] * min);
        max = Math.max(nums[i], nums[i] * max);
        res = Math.max(max, res);
    }
    return res;
}
