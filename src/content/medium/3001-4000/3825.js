// 3825 - Longest Strictly Increasing Subsequence With Non-Zero Bitwise AND

function longestSubsequence(nums) {
    let res = 0;
    const mask = nums.reduce((s, e) => s | e);
    for (let bit = 1; bit <= mask; bit <<= 1) {
        if ((bit & mask) === 0) continue;
        const dp = [];
        for (let i = 0; i < nums.length; i++) {
            if ((nums[i] & bit) === 0) continue;
            let l = 0, r = dp.length - 1;
            while (l <= r) {
                const m = l + r >> 1;
                if (dp[m] < nums[i]) l = m + 1;
                else r = m - 1;
            }
            dp[l] = nums[i];
        }
        res = Math.max(dp.length, res);
    }
    return res;
}
