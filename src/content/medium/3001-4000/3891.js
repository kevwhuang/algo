// 3891. Minimum Increase to Maximize Special Indices

function minIncrease(nums) {
    const { min, max } = Math, n = nums.length - 1;
    let dp1 = 0, dp2 = 1e14, dp3 = 1e14, dp4 = 1e14;
    if (n % 2 === 0) dp1 = 1e14, dp2 = 0;
    for (let swap, i = 1; i < n; i++) {
        const w = max(0, max(nums[i - 1], nums[i + 1]) - nums[i] + 1);
        swap = dp2, dp2 = min(dp1, dp4), dp4 = swap + w;
        swap = dp3, dp3 = dp1 + w, dp1 = swap;
    }
    return min(dp1, dp2, dp3, dp4);
}
