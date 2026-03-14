// 1855 - Maximum Distance Between a Pair of Values

function maxDistance(nums1, nums2) {
    let max = 0;
    for (let i = 0; i < nums1.length; i++) {
        let l = i, r = nums2.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (nums1[i] <= nums2[m]) l = m + 1;
            else r = m - 1;
        }
        max = Math.max(l - i - 1, max);
    }
    return max;
}
