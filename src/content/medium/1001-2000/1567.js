// 1567 - Maximum Length of Subarray With Positive Product

function getMaxLen(nums) {
    let res = 0, acc = 0, l = -1, m = -1, r = -1;
    while (++r < nums.length) {
        if (nums[r] === 0) acc = 0, l = r, m = -1;
        if (nums[r] === 0) continue;
        if (nums[r] < 0) acc++;
        if (acc % 2 && m === -1) m = r;
        res = Math.max(acc % 2 ? r - m : r - l, res);
    }
    return res;
}
