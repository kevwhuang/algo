// 3487 - Maximum Unique Subarray Sum After Deletion

function maxSum(nums) {
    const set = new Set();
    let max = -Infinity, i = -1;
    while (++i < nums.length) {
        if (nums[i] > 0) set.add(nums[i]);
        else max = Math.max(nums[i], max);
    }
    let res = 0;
    set.forEach(e => res += e);
    return res || max;
}
