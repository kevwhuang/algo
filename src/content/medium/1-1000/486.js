// 486 - Predict the Winner

function predictTheWinner(nums) {
    const dp = new Int32Array(nums);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i - 1; ~j; j--) {
            dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j + 1]);
        }
    }
    return dp[0] >= 0;
}
