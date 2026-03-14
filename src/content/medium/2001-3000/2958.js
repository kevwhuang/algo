// 2958 - Length of Longest Subarray With at Most K Frequency

function maxSubarrayLength(nums, k) {
    let max = 1;
    const obj = {};
    for (let l = 0, r = 0; r < nums.length; r++) {
        const num = nums[r];
        obj[num] = (obj[num] ?? 0) + 1;
        while (obj[num] > k) obj[nums[l]] = obj[nums[l++]] - 1;
        max = Math.max(r - l + 1, max);
    }
    return max;
}
