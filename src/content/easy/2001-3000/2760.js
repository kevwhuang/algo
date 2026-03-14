// 2760 - Longest Even Odd Subarray With Threshold

function longestAlternatingSubarray(nums, threshold) {
    let max = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (max >= len - i) return max;
        if (nums[i] % 2) continue;
        let size = 0;
        for (let j = i; j < len; j++, size++) {
            if (nums[j] % 2 !== size % 2 || nums[j] > threshold) break;
        }
        max = Math.max(size, max);
        i += Math.max(0, size - 1);
    }
    return max;
}
