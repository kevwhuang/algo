// 523 - Continuous Subarray Sum

function checkSubarraySum(nums, k) {
    let sum = 0, prev = 0;
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sum %= k;
        if (set.has(sum)) return true;
        set.add(prev);
        prev = sum;
    }
    return false;
}
