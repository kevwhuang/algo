// 3400 - Maximum Number of Matching Indices After Right Shifts

function maximumMatchingIndices(nums1, nums2) {
    const map = new Map(), n = nums1.length;
    for (let i = 0; i < n; i++) {
        if (!map.has(nums1[i])) map.set(nums1[i], []);
        map.get(nums1[i]).push(i);
    }
    const B = new Uint16Array(n);
    for (let i = 0; i < n; i++) {
        map.get(nums2[i])?.forEach(j => ++B[(n + i - j) % n]);
    }
    return B.reduce((s, e) => Math.max(e, s));
}
