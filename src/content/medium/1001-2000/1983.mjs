// 1983 - Widest Pair of Indices With Equal Range Sum

function widestPairOfIndices(nums1, nums2) {
    let widest = 0, acc = 0;
    const map = new Map([[0, -1]]);
    for (let i = 0; i < nums1.length; i++) {
        acc += nums1[i] - nums2[i];
        if (map.has(acc)) widest = Math.max(i - map.get(acc), widest);
        else map.set(acc, i);
    }
    return widest;
}
