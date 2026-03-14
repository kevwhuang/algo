// 2401 - Longest Nice Subarray

function longestNiceSubarray(nums) {
    let max = 1, window = 0;
    for (let i = 0, j = 0; i < nums.length; i++) {
        while (window & nums[i]) window ^= nums[j++];
        window |= nums[i];
        max = Math.max(i - j + 1, max);
    }
    return max;
}
