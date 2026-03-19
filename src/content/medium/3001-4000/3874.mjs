// 3874. Valid Subarrays With Exactly One Peak

function validSubarrays(nums, k) {
    let res = 0, l = -1, m = -1, r = 0;
    const min = Math.min, kk = k + 1, n = nums.length - 1;
    while (++r < n) {
        if (nums[r - 1] >= nums[r] || nums[r] <= nums[r + 1]) continue;
        res += min(m - l, kk) * min(r - m, kk), l = m, m = r;
    }
    return res + min(m - l, kk) * min(r - m + 1, kk);
}
