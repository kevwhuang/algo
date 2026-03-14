// 2919 - Minimum Increment Operations to Make Array Beautiful

function minIncrementOperations(nums, k) {
    let dp1 = Math.max(0, k - nums[0]);
    let dp2 = Math.max(0, k - nums[1]);
    let dp3 = Math.max(0, k - nums[2]);
    for (let i = 3; i < nums.length; i++) {
        const next = Math.min(dp1, dp2, dp3) + Math.max(0, k - nums[i]);
        dp1 = dp2, dp2 = dp3, dp3 = next;
    }
    return Math.min(dp1, dp2, dp3);
}
