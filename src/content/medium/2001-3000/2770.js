// 2770 - Maximum Number of Jumps to Reach the Last Index

function maximumJumps(nums, target) {
    const n = nums.length, dp = new Uint16Array(n);
    for (let i = 0; i < n; i++) {
        if (i && dp[i] === 0) continue;
        const cur = nums[i];
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(nums[j] - cur) > target) continue;
            dp[j] = Math.max(dp[i] + 1, dp[j]);
        }
    }
    return dp[n - 1] || -1;
}
