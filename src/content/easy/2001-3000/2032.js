// 2032 - Two Out of Three

function twoOutOfThree(nums1, nums2, nums3) {
    const bucket = new Array(101).fill(0);
    new Set(nums1).forEach(e => bucket[e]++);
    new Set(nums2).forEach(e => bucket[e]++);
    new Set(nums3).forEach(e => bucket[e]++);
    const res = [];
    for (let n = 1; n <= 100; n++) {
        if (bucket[n] >= 2) res.push(n);
    }
    return res;
}
