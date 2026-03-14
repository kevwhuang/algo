// 3660 - Jump Game IX

function maxValue(nums) {
    const n = nums.length, ps = new Uint32Array(n);
    ps[0] = nums[0];
    for (let i = 1; i < n; i++) {
        ps[i] = Math.max(ps[i - 1], nums[i]);
    }
    let min = nums[n - 1];
    nums[n - 1] = ps[n - 1];
    for (let i = n - 2; ~i; i--) {
        const next = Math.min(nums[i], min);
        nums[i] = ps[i] <= min ? ps[i] : nums[i + 1];
        min = next;
    }
    return nums;
}
