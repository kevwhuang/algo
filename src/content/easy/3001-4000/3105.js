// 3105 - Longest Strictly Increasing or Strictly Decreasing Subarray

function longestMonotonicSubarray(nums) {
    let res = 1, acc1 = 1, acc2 = 1, i = 0;
    while (++i < nums.length) {
        const a = nums[i - 1], b = nums[i];
        if (a < b) res = Math.max(++acc1, res), acc2 = 1;
        else if (a > b) res = Math.max(++acc2, res), acc1 = 1;
        else acc1 = acc2 = 1;
    }
    return res;
}
