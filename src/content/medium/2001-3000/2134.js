// 2134 - Minimum Swaps to Group All 1's Together II

function minSwaps(nums) {
    const ones = nums.reduce((s, e) => s + e);
    if (ones === 0) return 0;
    let window = 0;
    const end = ones - 1;
    for (let r = 0; r < end; r++) {
        window += nums[r];
    }
    let max = 0;
    for (let l = 0, r = end; l < nums.length; l++) {
        window += nums[r];
        max = Math.max(window, max);
        window -= nums[l];
        if (++r === nums.length) r = 0;
    }
    return ones - max;
}
