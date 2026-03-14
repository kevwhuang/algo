// 3708 - Longest Fibonacci Subarray

function longestSubarray(nums) {
    let res = 2, acc = 2, i = 1;
    while (++i < nums.length) {
        if (nums[i - 2] + nums[i - 1] !== nums[i]) acc = 2;
        else res = Math.max(++acc, res);
    }
    return res;
}
