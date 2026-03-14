// 3599 - Partition Array to Minimize XOR

function minXor(nums, k) {
    if (!this.dp1) dp1 = new Uint32Array(251), dp2 = new Uint32Array(251);
    if (!this.ps) ps = new Uint32Array(251), max = Math.max;
    const n = nums.length;
    let cur, i = -1;
    while (++i < n) dp1[i] = -1, ps[i + 1] = ps[i] ^ nums[i];
    dp1[0] = i = 0;
    while (++i <= k) {
        for (let r = i; r <= n + i - k; r++) {
            let min = Infinity, l = i - 2;
            while (++l < r) min = Math.min(max(dp1[l], ps[l] ^ ps[r]), min);
            dp2[r] = min;
        }
        cur = dp1, dp1 = dp2, dp2 = cur;
    }
    return dp1[n];
}
