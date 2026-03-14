// 3347 - Maximum Frequency of an Element After Performing Operations II

function maxFrequency(nums, k, numOperations) {
    nums = new Uint32Array(nums).sort();
    let res = 1, l = 0, m = 0, r = 0, n = nums.length;
    while (m < n) {
        let acc = numOperations, cur = nums[m];
        while (m < n && nums[m] === cur) acc++, m++;
        while (l < m && nums[l] < cur - k) l++;
        r = Math.max(m, r);
        while (r < n && nums[r] <= cur + k) r++;
        res = Math.max(Math.min(acc, r - l), res);
    }
    l = -1, r = 0;
    while (++l < n - res) {
        while (nums[l] + k + k >= nums[r]) r++;
        res = Math.max(Math.min(numOperations, r - l), res);
    }
    return res;
}
