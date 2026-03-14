// 1027 - Longest Arithmetic Subsequence

function longestArithSeqLength(nums) {
    let res = 0;
    const n = nums.length;
    const dp = Array.from({ length: n }, () => new Uint16Array(1001));
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const k = nums[j] - nums[i] + 500;
            dp[j][k] = (dp[i][k] || 1) + 1;
            res = Math.max(dp[j][k], res);
        }
    }
    return res;
}
