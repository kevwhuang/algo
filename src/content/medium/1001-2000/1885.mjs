// 1885 - Count Pairs in Two Arrays

function countPairs(nums1, nums2) {
    const len = nums1.length;
    for (let i = 0; i < len; i++) {
        nums1[i] -= nums2[i];
    }
    nums1.sort((a, b) => a - b);
    let pairs = 0;
    for (let i = 0, j = len - 1; i < len; i++) {
        while (i < j && nums1[i] + nums1[j] > 0) j--;
        pairs += len - 1 - Math.max(i, j);
    }
    return pairs;
}
