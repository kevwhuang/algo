// 1493 - Longest Subarray of 1's After Deleting One Element

function longestSubarray(nums) {
    let l = 0, r = 0, k = 1;
    while (r < nums.length) {
        if (nums[r++] === 0) k--;
        if (k >= 0) continue;
        if (nums[l++] === 0) k++;
    }
    return r - l - 1;
}
