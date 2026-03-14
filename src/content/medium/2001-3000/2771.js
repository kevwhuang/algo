// 2771 - Longest Non-Decreasing Subarray From Two Arrays

function maxNonDecreasingLength(nums1, nums2) {
    let res = 1, a = 1, b = 1, i = 0;
    while (++i < nums1.length) {
        let aa = 1, bb = 1;
        if (nums1[i - 1] <= nums1[i]) aa = Math.max(a + 1, aa);
        if (nums2[i - 1] <= nums1[i]) aa = Math.max(b + 1, aa);
        if (nums1[i - 1] <= nums2[i]) bb = Math.max(a + 1, bb);
        if (nums2[i - 1] <= nums2[i]) bb = Math.max(b + 1, bb);
        res = Math.max(aa, bb, res), a = aa, b = bb;
    }
    return res;
}
