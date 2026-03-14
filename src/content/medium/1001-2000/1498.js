// 1498 - Number of Subsequences That Satisfy the Given Sum Condition

function numSubseq(nums, target) {
    nums.sort((a, b) => a - b);
    const powers = new Uint32Array(nums.length);
    powers[0] = 1;
    const mod = 1e9 + 7;
    for (let i = 1; i < nums.length; i++) {
        powers[i] = powers[i - 1] * 2 % mod;
    }
    let count = 0, l = 0, r = nums.length - 1;
    while (l <= r) {
        if (nums[l] + nums[r] > target) r--;
        else count = (count + powers[r - l++]) % mod;
    }
    return count;
}
