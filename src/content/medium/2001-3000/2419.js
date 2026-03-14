// 2419 - Longest Subarray With Maximum Bitwise AND

function longestSubarray(nums) {
    let max = 1, i = 0;
    const target = Math.max(...nums);
    while (true) {
        while (i < nums.length && nums[i] !== target) i++;
        if (i === nums.length) return max;
        const start = i;
        while (i < nums.length && nums[i] === target) i++;
        max = Math.max(i - start, max);
        if (i === nums.length) return max;
    }
}
