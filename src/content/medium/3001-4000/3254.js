// 3254 - Find the Power of K-Size Subarrays I

function resultsArray(nums, k) {
    if (k-- === 1) return nums;
    const res = new Int32Array(nums.length - k);
    for (let i = 0, j = 0, size = 1; i < nums.length; i++) {
        size = nums[i - 1] + 1 === nums[i] ? size + 1 : 1;
        if (i >= k) res[j++] = size > k ? nums[i] : -1;
    }
    return res;
}
