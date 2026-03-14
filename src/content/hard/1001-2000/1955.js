// 1955 - Count Number of Special Subsequences

function countSpecialSubsequences(nums) {
    let a = 0, b = 0, c = 0;
    const mod = 1000000007;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) a = (a + a + 1) % mod;
        else if (nums[i] === 1) b = (a + b + b) % mod;
        else c = (b + c + c) % mod;
    }
    return c;
}
