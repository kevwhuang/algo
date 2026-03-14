// 3351 - Sum of Good Subsequences

function sumOfGoodSubsequences(nums) {
    if (!this.dp1) dp1 = new Uint32Array(100003);
    if (!this.dp2) dp2 = new Uint32Array(100003);
    dp1.fill(0);
    dp2.fill(0);
    let res = 0;
    const mod = 1000000007;
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        const sum1 = dp1[a] + dp1[a + 2] + 1;
        const sum2 = dp2[a] + dp2[a + 2] + a * sum1;
        res = (res + sum2) % mod;
        dp1[a + 1] = (dp1[a + 1] + sum1) % mod;
        dp2[a + 1] = (dp2[a + 1] + sum2) % mod;
    }
    return res;
}
