// 3107 - Minimum Operations to Make Median of Array Equal to K

function minOperationsToMakeMedianK(nums, k) {
    nums.sort((a, b) => a - b);
    const m = nums.length >> 1;
    let ops = Math.abs(nums[m] - k);
    if (nums[m] < k) {
        for (let i = m + 1; i < nums.length; i++) {
            const cur = k - nums[i];
            if (cur <= 0) break;
            ops += cur;
        }
    } else {
        for (let i = m - 1; i >= 0; i--) {
            const cur = nums[i] - k;
            if (cur <= 0) break;
            ops += cur;
        }
    }
    return ops;
}
