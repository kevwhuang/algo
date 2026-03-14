// 3409 - Longest Subsequence With Decreasing Adjacent Difference

function longestSubsequence(nums) {
    const n = nums.reduce((s, e) => Math.max(e, s)) + 1;
    const dp = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = nums.length - 1; ~i; i--) {
        const cur = nums[i];
        for (let j = 1; j < n; j++) {
            const abs = Math.abs(j - cur);
            dp[cur][abs] = Math.max(dp[j][abs] + 1, dp[cur][abs]);
        }
        for (let j = 1; j < n; j++) {
            dp[cur][j] = Math.max(dp[cur][j - 1], dp[cur][j]);
        }
    }
    return dp.reduce((s, e) => Math.max(e.at(-1), s), 0);
}
