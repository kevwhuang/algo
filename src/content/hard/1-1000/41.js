// 41 - First Missing Positive

function firstMissingPositive(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) nums[i] = 100001;
    }
    for (let i = 0; i < n; i++) {
        const abs = Math.abs(nums[i]) - 1;
        if (abs < 100000) nums[abs] = -Math.abs(nums[abs]);
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) return i + 1;
    }
    return n + 1;
}
