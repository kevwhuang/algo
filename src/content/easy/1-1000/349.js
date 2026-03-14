// 349 - Intersection of Two Arrays

function intersection(nums1, nums2) {
    const arr = new Uint8Array(1001);
    nums1.forEach(e => arr[e] = 1);
    nums2.forEach(e => arr[e] &&= 2);
    const res = [];
    arr.forEach((e, i) => e === 2 && res.push(i));
    return res;
}
