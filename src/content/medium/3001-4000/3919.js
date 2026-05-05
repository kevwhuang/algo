// 3919. Minimum Cost to Move Between Indices

function minCost(nums, queries) {
    const n = nums.length;
    const pre = new Uint32Array(n);
    const suf = new Uint32Array(n);
    pre[1] = suf[n - 2] = 1;
    for (let i = 2; i < n; i++) {
        const a = nums[i - 2], b = nums[i - 1], c = nums[i];
        pre[i] = pre[i - 1] + (b - a > c - b ? 1 : c - b);
    }
    for (let i = n - 3; ~i; i--) {
        const a = nums[i], b = nums[i + 1], c = nums[i + 2];
        suf[i] = suf[i + 1] + (b - a <= c - b ? 1 : b - a);
    }
    for (let i = 0; i < queries.length; i++) {
        const l = queries[i][0], r = queries[i][1];
        queries[i] = l <= r ? pre[r] - pre[l] : suf[r] - suf[l];
    }
    return queries;
}
