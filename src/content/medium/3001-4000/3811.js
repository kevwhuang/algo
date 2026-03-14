// 3811 - Number of Alternating XOR Partitions

function alternatingXOR(nums, target1, target2) {
    let acc = 0, dp1 = 1, dp2 = 0, dp3 = 0, dp4 = 0;
    const n = nums.length - 1, xor = target1 ^ target2, mod = 1000000007;
    for (let i = 0; i < n; i++) {
        acc ^= nums[i];
        let dp11 = dp1, dp22 = dp2, dp33 = dp3, dp44 = dp4;
        if (acc === 0) dp11 = (dp11 + dp4) % mod;
        if (acc === target1) dp22 = (dp22 + dp1) % mod;
        if (acc === xor) dp33 = (dp33 + dp2) % mod;
        if (acc === target2) dp44 = (dp44 + dp3) % mod;
        dp1 = dp11, dp2 = dp22, dp3 = dp33, dp4 = dp44;
    }
    acc ^= nums.at(-1);
    let res = 0;
    if (acc === target1) res += dp1;
    if (acc === xor) res += dp2;
    if (acc === target2) res += dp3;
    if (acc === 0) res += dp4;
    return res % mod;
}
