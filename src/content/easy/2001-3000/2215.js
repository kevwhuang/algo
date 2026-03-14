// 2215 - Find the Difference of Two Arrays

function findDifference(nums1, nums2) {
    nums1 = new Set(nums1);
    nums2 = new Set(nums2);
    const res = [[], []];
    for (const num of nums1) {
        if (!nums2.has(num)) res[0].push(num);
    }
    for (const num of nums2) {
        if (!nums1.has(num)) res[1].push(num);
    }
    return res;
}
