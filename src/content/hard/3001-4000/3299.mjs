// 3299 - Sum of Consecutive Subsequences

function getSum(nums) {
    function fn(d) {
        dp1.fill(0, min - 1, max + 2);
        dp2.fill(0, min - 1, max + 2);
        let acc = 0;
        for (let i = 0; i < nums.length; i++) {
            const a = nums[i];
            const sum = a * (dp1[a + d] + 1) + dp2[a + d];
            acc = (acc + sum) % mod;
            dp1[a] = (dp1[a] + dp1[a + d] + 1) % mod;
            dp2[a] = (dp2[a] + sum) % mod;
        }
        return acc;
    }
    if (!this.dp1) dp1 = new Uint32Array(100002);
    if (!this.dp2) dp2 = new Uint32Array(100002);
    let res = 0, min = 100000, max = 1;
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        res -= nums[i];
        min = Math.min(a, min);
        max = Math.max(a, max);
    }
    const mod = 1000000007;
    res = (res % mod + fn(1) + fn(-1) + mod) % mod;
    return res;
}
