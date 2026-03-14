// 740 - Delete and Earn

function deleteAndEarn(nums) {
    const dp = new Array(Math.max(...nums) + 1).fill(0);
    nums.forEach(e => dp[e] += e);
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(dp[i - 2] + dp[i], dp[i - 1]);
    }
    return dp.at(-1);
}
