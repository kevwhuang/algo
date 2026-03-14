// 1708 - Largest Subarray Length K

function largestSubarray(nums, k) {
    let res = 0;
    for (let i = 1; i <= nums.length - k; i++) {
        if (nums[i] > nums[res]) res = i;
    }
    return nums.slice(res, res + k);
}
