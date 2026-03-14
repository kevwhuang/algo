// 368 - Largest Divisible Subset

function largestDivisibleSubset(nums) {
    nums = new Uint32Array(nums).sort();
    const n = nums.length;
    const dp = new Uint16Array(n).fill(1);
    const arr = new Uint16Array(n).fill(10000);
    let idx = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j]) continue;
            if (dp[j] + 1 <= dp[i]) continue;
            dp[i] = dp[j] + 1, arr[i] = j;
        }
        if (dp[i] > dp[idx]) idx = i;
    }
    const res = [];
    while (idx < 10000) {
        res.push(nums[idx]);
        idx = arr[idx];
    }
    return res.reverse();
}
