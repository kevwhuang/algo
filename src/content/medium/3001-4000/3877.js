// 3877. Minimum Removals to Achieve Target XOR

function minRemovals(nums, target) {
    const n = 1 << 32 - Math.clz32(Math.max(...nums, target));
    let dp1 = new Uint8Array(n).fill(100), dp2 = new Uint8Array(n);
    dp1[0] = 0;
    for (let swap, i = 0; i < nums.length; i++) {
        dp2.fill(100);
        const cur = nums[i];
        for (let j = 0; j < n; j++) {
            if (dp1[j] === 100) continue;
            dp2[j] = Math.min(dp1[j] + 1, dp2[j]);
            dp2[j ^ cur] = Math.min(dp1[j], dp2[j ^ cur]);
        }
        swap = dp1, dp1 = dp2, dp2 = swap;
    }
    return dp1[target] < 100 ? dp1[target] : -1;
}
