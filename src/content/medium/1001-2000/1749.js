// 1749 - Maximum Absolute Sum of Any Subarray

function maxAbsoluteSum(nums) {
    let min = Infinity, max = -Infinity, acc1 = 0, acc2 = 0, i = -1;
    while (++i < nums.length) {
        const cur = nums[i];
        acc1 = Math.min(cur, acc1 + cur);
        acc2 = Math.max(cur, acc2 + cur);
        min = Math.min(acc1, min);
        max = Math.max(acc2, max);
    }
    return Math.max(Math.abs(min), Math.abs(max));
}
