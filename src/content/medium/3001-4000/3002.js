// 3002. Maximum Size of a Set After Removals

function maximumSetSize(nums1, nums2) {
    const len = nums1.length;
    nums1 = new Set(nums1);
    nums2 = new Set(nums2);
    let dups = 0;
    for (const num of nums1) {
        if (nums2.has(num)) dups++;
    }
    const unique1 = Math.min(len / 2, nums1.size - dups);
    const unique2 = Math.min(len / 2, nums2.size - dups);
    return unique1 + unique2 + Math.min(len - unique1 - unique2, dups);
}
