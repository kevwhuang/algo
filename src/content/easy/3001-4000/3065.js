// 3065 - Minimum Operations to Exceed Threshold Value I

function minOperations(nums, k) {
    return nums.reduce((s, e) => s + (e < k ? 1 : 0), 0);
}
