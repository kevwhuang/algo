// 3724 - Minimum Operations to Transform Array

function minOperations(nums1, nums2) {
    const res = nums1.reduce((s, e, i) => s + Math.abs(e - nums2[i]), 1);
    const tgt = nums2.at(-1);
    let min = Infinity, i = -1;
    while (++i < nums1.length) {
        const l = Math.min(nums1[i], nums2[i]);
        const r = Math.max(nums1[i], nums2[i]);
        if (l <= tgt && tgt <= r) return res;
        min = Math.min(Math.abs(l - tgt), Math.abs(r - tgt), min);
    }
    return res + min;
}
