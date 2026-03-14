// 350 - Intersection of Two Arrays II

function intersect(nums1, nums2) {
    const B = new Int16Array(1001);
    nums1.forEach(e => B[e]++);
    const res = [];
    nums2.forEach(e => --B[e] >= 0 && res.push(e));
    return res;
}
