// 3914. Minimum Operations to Make Array Non-Decreasing

function minOperations(nums) {
    let res = 0;
    for (let i = 1; i < nums.length; i++) {
        res += Math.max(nums[i - 1] - nums[i], 0);
    }
    return res;
}
