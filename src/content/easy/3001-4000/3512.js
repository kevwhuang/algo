// 3512 - Minimum Operations to Make Array Sum Divisible by K

function minOperations(nums, k) {
    return nums.reduce((s, e) => s + e) % k;
}
