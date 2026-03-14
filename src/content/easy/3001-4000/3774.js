// 3774 - Absolute Difference Between Maximum and Minimum K Elements

function absDifference(nums, k) {
    nums = new Uint8Array(nums).sort();
    let res = 0;
    const n = nums.length;
    for (let i = k; i < n; i++) {
        res += nums[i];
    }
    for (let i = n - k - 1; ~i; i--) {
        res -= nums[i];
    }
    return res;
}
