// 3366 - Minimum Array Sum

function minArraySum(nums, k, op1, op2) {
    if (!this.dp) dp = Array.from({ length: 102 }, () => new Array(102));
    for (let i = 0; i <= op1 + 1; i++) {
        for (let j = 0; j <= op2 + 1; j++) {
            dp[i][j] = 1e9;
        }
    }
    dp[op1][op2] = 0;
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i], b = Math.ceil(a / 2), c = a < k ? 1e9 : a - k;
        const d = Math.min(b < k ? 1e9 : b - k, a < k ? 1e9 : Math.ceil(c / 2));
        for (let j = 0; j <= op1; j++) {
            for (let k = 0; k <= op2; k++) {
                const aa = dp[j][k] + a, bb = dp[j + 1][k] + b;
                const cc = dp[j][k + 1] + c, dd = dp[j + 1][k + 1] + d;
                dp[j][k] = Math.min(aa, bb, cc, dd);
            }
        }
    }
    let i = -1;
    while (true) if (dp[0][++i] < 1e9) return dp[0][i];
}
