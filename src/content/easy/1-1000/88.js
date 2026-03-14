// 88 - Merge Sorted Array

function merge(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1;
    while (~j) {
        nums1[i + j + 1] = ~i && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
}
