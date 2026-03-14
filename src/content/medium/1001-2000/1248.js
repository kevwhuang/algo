// 1248 - Count Number of Nice Subarrays

function numberOfSubarrays(nums, k) {
    let l = 0, r = -1;
    while (++r < nums.length) {
        if (nums[r] & 1) nums[l++] = r;
    }
    nums[l] = nums.length;
    let subarrays = 0;
    for (let j = k - 1; j < l; j++) {
        const i = j - k + 1;
        const left = nums[i] - (i >= 1 ? nums[i - 1] : -1);
        const right = nums[j + 1] - nums[j];
        subarrays += left * right;
    }
    return subarrays;
}
