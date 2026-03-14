// 2570 - Merge Two 2D Arrays by Summing Values

function mergeArrays(nums1, nums2) {
    const res = [], m = nums1.length, n = nums2.length;
    let i = 0, j = 0;
    while (i < m || j < n) {
        const idx1 = i < m ? nums1[i][0] : Infinity;
        const idx2 = j < n ? nums2[j][0] : Infinity;
        if (idx1 < idx2) res.push([idx1, nums1[i++][1]]);
        else if (idx1 > idx2) res.push([idx2, nums2[j++][1]]);
        else res.push([idx1, nums1[i++][1] + nums2[j++][1]]);
    }
    return res;
}
