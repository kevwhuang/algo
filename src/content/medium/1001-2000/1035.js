// 1035 - Uncrossed Lines

function maxUncrossedLines(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    if (m < n) return maxUncrossedLines(nums2, nums1);
    const dp = new Uint16Array(n);
    for (let i = 0; i < m; i++) {
        for (let prev = 0, j = 0; j < n; j++) {
            const cur = dp[j];
            if (nums1[i] === nums2[j]) dp[j] = prev + 1;
            else if (j) dp[j] = Math.max(dp[j - 1], dp[j]);
            prev = cur;
        }
    }
    return dp[n - 1];
}
