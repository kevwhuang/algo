// 2297 - Jump Game VIII

function minCost(nums, costs) {
    const n = nums.length;
    const arr1 = new Uint32Array(n), arr2 = new Uint32Array(n);
    const S1 = [], S2 = [];
    for (let i = 0; i < n; i++) {
        const cur = nums[i];
        while (S1.length && nums[S1.at(-1)] <= cur) arr1[S1.pop()] = i;
        while (S2.length && nums[S2.at(-1)] > cur) arr2[S2.pop()] = i;
        S1.push(i);
        S2.push(i);
    }
    const dp = new Array(n).fill(1e10);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        const j = arr1[i], k = arr2[i];
        dp[j] = Math.min(dp[i] + costs[j], dp[j]);
        dp[k] = Math.min(dp[i] + costs[k], dp[k]);
    }
    return dp[n - 1];
}
