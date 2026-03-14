// 718 - Maximum Length of Repeated Subarray

function findLength(nums1, nums2) {
    let res = 0;
    const m = nums1.length, n = nums2.length;
    const dp = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let prev = 0, j = 0; j < n; j++) {
            const cur = dp[j];
            if (nums1[i] !== nums2[j]) dp[j] = 0;
            else res = Math.max(dp[j] = prev + 1, res);
            prev = cur;
        }
    }
    return res;
}
