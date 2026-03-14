// 2956 - Find Common Elements Between Two Arrays

function findIntersectionValues(nums1, nums2) {
    const res = [0, 0];
    nums1.forEach(e => nums2.includes(e) && res[0]++);
    nums2.forEach(e => nums1.includes(e) && res[1]++);
    return res;
}
