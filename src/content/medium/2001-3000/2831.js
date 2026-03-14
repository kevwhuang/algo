// 2831 - Find the Longest Equal Subarray

function longestEqualSubarray(nums, k) {
    let max = 1;
    const bucket = new Array(nums.length + 1).fill(0);
    for (let l = 0, r = 0; r < nums.length; r++) {
        max = Math.max(++bucket[nums[r]], max);
        while (r - l - max >= k) bucket[nums[l++]]--;
    }
    return max;
}
