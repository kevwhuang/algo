// 496 - Next Greater Element I

function nextGreaterElement(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    for (let i = 0; i < m; i++) {
        let idx = -1;
        for (let j = nums2.indexOf(nums1[i]) + 1; j < n; j++) {
            if (nums2[j] <= nums1[i]) continue;
            idx = nums2[j];
            break;
        }
        nums1[i] = idx;
    }
    return nums1;
}
