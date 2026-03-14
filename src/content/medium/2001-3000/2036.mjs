// 2036 - Maximum Alternating Subarray Sum

function maximumAlternatingSubarraySum(nums) {
    let res = -Infinity, acc1 = res, acc2 = res, i = -1;
    while (++i < nums.length) {
        const cur = nums[i];
        if (i % 2) acc1 -= cur, acc2 = Math.max(cur, acc2 + cur);
        else acc1 = Math.max(cur, acc1 + cur), acc2 -= cur;
        res = Math.max(acc1, acc2, res);
    }
    return res;
}
