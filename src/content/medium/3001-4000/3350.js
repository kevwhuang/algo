// 3350 - Adjacent Increasing Subarrays Detection II

function maxIncreasingSubarrays(nums) {
    let max = 1, acc = 1, prev = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) acc++;
        else prev = acc, acc = 1;
        max = Math.max(Math.min(acc, prev), acc >> 1, max);
    }
    return max;
}
