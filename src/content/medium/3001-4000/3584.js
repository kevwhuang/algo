// 3584 - Maximum Product of First and Last Elements of a Subsequence

function maximumProduct(nums, m) {
    let res = -Infinity, min = Infinity, max = -Infinity, i = --m;
    while (i < nums.length) {
        const a = nums[i - m], b = nums[i++];
        min = Math.min(a, min), max = Math.max(a, max);
        res = Math.max(min * b, max * b, res);
    }
    return res;
}
