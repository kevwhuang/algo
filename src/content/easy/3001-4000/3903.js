// 3903. Smallest Stable Index I

function firstStableIndex(nums, k) {
    const n = nums.length;
    const suf = new Uint32Array(n + 1).fill(-1, n);
    for (let i = n - 1; ~i; i--) {
        suf[i] = Math.min(nums[i], suf[i + 1]);
    }
    for (let max = 0, i = 0; i < n; i++) {
        max = Math.max(nums[i], max);
        if (max - suf[i] <= k) return i;
    }
    return -1;
}
