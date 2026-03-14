// 3686 - Number of Stable Subsequences

function countStableSubsequences(nums) {
    let a = 0, b = 0, c = 0, d = 0, i = -1;
    const n = nums.length, mod = 1000000007;
    while (++i < n) {
        if (nums[i] % 2) a = (a + b) % mod, b = (b + c + d + 1) % mod;
        else c = (c + d) % mod, d = (a + b + d + 1) % mod;
    }
    return (a + b + c + d) % mod;
}
