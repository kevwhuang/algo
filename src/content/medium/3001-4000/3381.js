// 3381 - Maximum Subarray Sum With Length Divisible by K

function maxSubarraySum(nums, k) {
    let max = -Infinity, acc = 0;
    const arr = new Array(k).fill(Infinity);
    arr[k - 1] = 0;
    for (let i = 0; i < nums.length; i++) {
        acc += nums[i];
        max = Math.max(acc - arr[i % k], max);
        arr[i % k] = Math.min(acc, arr[i % k]);
    }
    return max;
}
