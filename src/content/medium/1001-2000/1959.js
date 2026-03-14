// 1959 - Minimum Total Space Wasted With K Resizing Operations

function minSpaceWastedKResizing(nums, k) {
    const n = nums.length, ps = new Uint32Array(n + 1);
    nums.forEach((e, i) => ps[i + 1] = ps[i] + e);
    let dp = new Uint32Array(n + 1).fill(-1);
    let N = new Uint32Array(n + 1);
    dp[0] = 0;
    while (--k > -2) {
        N.fill(-1);
        let cur, r = 0;
        while (++r <= n) {
            for (let max = 0, l = r; l; l--) {
                max = Math.max(nums[l - 1], max);
                const next = (r - l + 1) * max + ps[l - 1] - ps[r];
                N[r] = Math.min(dp[l - 1] + next, N[r]);
            }
        }
        cur = dp, dp = N, N = cur;
    }
    return dp[n];
}
