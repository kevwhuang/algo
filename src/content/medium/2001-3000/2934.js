// 2934 - Minimum Operations to Maximize Last Elements in Arrays

function minOperations(nums1, nums2) {
    let swaps1 = 0, swaps2 = 0;
    const len = nums1.length;
    const max = Math.max(nums1[len - 1], nums2[len - 1]);
    const min = Math.min(nums1[len - 1], nums2[len - 1]);
    for (let i = 0; i < len; i++) {
        const a = nums1[i], b = nums2[i];
        if (a > max || b > max) return -1;
        if (a > min && b > min) return -1;
        if (a > min) swaps1++;
        else if (b > min) swaps2++;
    }
    return Math.min(swaps1, swaps2);
}
