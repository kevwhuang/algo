// 3555 - Smallest Subarray to Sort in Every Sliding Window

function minSubarraySort(nums, k) {
    const res = new Uint16Array(nums.length - k + 1);
    for (let i = k; i <= nums.length; i++) {
        let l = i - k, r = i - 1;
        const left = l, right = r;
        while (l < right && nums[l] <= nums[l + 1]) l++;
        if (l === right) continue;
        while (r > left && nums[r] >= nums[r - 1]) r--;
        let min = 1e7, max = 0, j = l - 1;
        while (++j <= r) {
            min = Math.min(nums[j], min);
            max = Math.max(nums[j], max);
        }
        while (l > left && nums[l - 1] > min) l--;
        while (r < right && nums[r + 1] < max) r++;
        res[i - k] = r - l + 1;
    }
    return res;
}
