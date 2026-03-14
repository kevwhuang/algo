// 3131 - Find the Integer Added to Array I

function addedInteger(nums1, nums2) {
    return Math.min(...nums2) - Math.min(...nums1);
}
