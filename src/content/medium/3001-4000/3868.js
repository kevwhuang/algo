// 3868. Minimum Cost to Equalize Arrays Using Swaps

function minCost(nums1, nums2) {
    if (!this.B) B = new Int32Array(80001);
    let max = 1;
    for (let i = 0; i < nums1.length; i++) {
        max = Math.max(nums1[i], nums2[i], max);
    }
    B.fill(0, 1, max + 1);
    for (let i = 0; i < nums1.length; i++) {
        B[nums1[i]]++, B[nums2[i]]--;
    }
    let res = 0;
    for (let i = 1; i <= max; i++) {
        if (B[i] % 2) return -1;
        res += Math.abs(B[i]);
    }
    return res / 4;
}
