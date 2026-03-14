// 3428 - Maximum and Minimum Sums of at Most Size K Subsequences

function minMaxSums(nums, k) {
    nums = new Uint32Array(nums).sort();
    let res = 0;
    const dp = new Array(k).fill(1);
    const n = nums.length, mod = 1000000007;
    for (let i = n - 1; ~i; i--) {
        let acc = 0, j = Math.min(k, n - i);
        const max = Math.max(0, j - k);
        while (--j >= max) {
            acc = (acc + dp[j]) % mod;
            if (j) dp[j] = (dp[j - 1] + dp[j]) % mod;
        }
        const prod = BigInt(nums[i] + nums[n - i - 1]) * BigInt(acc);
        res = (res + Number(prod % 1000000007n)) % mod;
    }
    return res;
}
