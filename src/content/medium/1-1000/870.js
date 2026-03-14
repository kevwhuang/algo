// 870 - Advantage Shuffle

function advantageCount(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    const len = nums1.length;
    for (let i = 0; i < len; i++) {
        nums2[i] = [nums2[i], i];
    }
    nums2.sort((a, b) => a[0] - b[0]);
    const res = new Array(len);
    let l = 0, r = len - 1;
    for (let i = 0; i < len; i++) {
        if (nums1[i] <= nums2[l][0]) res[nums2[r--][1]] = nums1[i];
        else res[nums2[l++][1]] = nums1[i];
    }
    return res;
}
