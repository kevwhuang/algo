// 3682 - Minimum Index Sum of Common Elements

function minimumSum(nums1, nums2) {
    const map = new Map(), n = nums1.length;
    for (let i = 0; i < n; i++) {
        if (!map.has(nums1[i])) map.set(nums1[i], i);
    }
    let res = 500000;
    for (let i = 0; i < n; i++) {
        if (map.has(nums2[i])) res = Math.min(map.get(nums2[i]) + i, res);
    }
    return res < 500000 ? res : -1;
}
