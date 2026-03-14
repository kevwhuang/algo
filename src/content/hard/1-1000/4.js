// 4 - Median of Two Sorted Arrays

function findMedianSortedArrays(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    if (m > n) return findMedianSortedArrays(nums2, nums1);
    let l = 0, r = m;
    while (true) {
        const m1 = l + r >> 1, m2 = (m + n + 1 >> 1) - m1;
        const a = m1 ? nums1[m1 - 1] : -Infinity;
        const b = m1 < m ? nums1[m1] : Infinity;
        const c = m2 ? nums2[m2 - 1] : -Infinity;
        const d = m2 < n ? nums2[m2] : Infinity;
        if (b < c) l = m1 + 1;
        else if (a > d) r = m1 - 1;
        else if (m + n & 1) return Math.max(a, c);
        else return (Math.max(a, c) + Math.min(b, d)) / 2;
    }
}
