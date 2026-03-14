// 2765 - Longest Alternating Subarray

function alternatingSubarray(nums) {
    let max = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 !== nums[i + 1]) continue;
        let len = 2, dir = -1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] + dir !== nums[j + 1]) break;
            len++, dir *= -1;
        }
        max = Math.max(len, max);
        i += len - 2;
    }
    return max;
}
