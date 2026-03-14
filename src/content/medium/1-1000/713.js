// 713 - Subarray Product Less Than K

function numSubarrayProductLessThanK(nums, k) {
    if (k === 0) return 0;
    let subarrays = 0, window = 1;
    for (let l = 0, r = 0; r < nums.length; r++) {
        window *= nums[r];
        while (l < r && window >= k) window /= nums[l++];
        if (window < k) subarrays += r - l + 1;
    }
    return subarrays;
}
