// 3578 - Count Partitions With Max-Min Difference at Most K

function countPartitions(nums, k) {
    if (!this.dp) dp = new Uint32Array(50001), dp[0] = 1;
    if (!this.Q1) Q1 = new Uint32Array(50000);
    if (!this.Q2) Q2 = new Uint32Array(50000);
    const n = nums.length, mod = 1000000007;
    let acc = 1, l1 = 0, r1 = 0, l2 = 0, r2 = 0, l3 = 0, r3 = 0;
    while (r3 < n) {
        while (l1 < r1 && nums[Q1[r1 - 1]] > nums[r3]) r1--;
        while (l2 < r2 && nums[Q2[r2 - 1]] < nums[r3]) r2--;
        Q1[r1++] = r3, Q2[r2++] = r3;
        while (nums[Q2[l2]] - nums[Q1[l1]] > k) {
            acc = (acc + mod - dp[l3++]) % mod;
            if (Q1[l1] < l3) l1++;
            if (Q2[l2] < l3) l2++;
        }
        dp[++r3] = acc, acc = 2 * acc % mod;
    }
    return dp[n];
}
