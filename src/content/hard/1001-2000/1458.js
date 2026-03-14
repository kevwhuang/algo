// 1458 - Max Dot Product of Two Subsequences

function maxDotProduct(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    if (m < n) return maxDotProduct(nums2, nums1);
    const dp = new Int32Array(n + 1).fill(-1000000);
    for (let i = 0; i < m; i++) {
        for (let prev = 0, j = 0; j < n; j++) {
            const cur = dp[j + 1];
            const max = Math.max(prev, 0) + nums1[i] * nums2[j];
            dp[j + 1] = Math.max(max, dp[j], cur);
            prev = cur;
        }
    }
    return dp[n];
}
