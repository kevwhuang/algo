// 3934. Smallest Unique Subarray

function smallestUniqueSubarray(nums) {
    if (this.pre === undefined) {
        pre = new Array(1e5), dict = new Array(1e5), mod = 1e10 + 19;
        for (let pow = 1, exp = 0; exp < 1e5; exp++) {
            dict[exp] = pow, pow = 1e5 * pow % mod;
        }
    }
    const n = nums.length, set1 = new Set(), set2 = new Set();
    for (let hash = 0, i = 0; i < n; i++) {
        const cur = nums[i];
        pre[i] = hash = (1e5 * hash + cur) % mod;
        if (set1.has(cur)) set2.add(cur);
        else set1.add(cur);
    }
    if (set1.size > set2.size) return 1;
    let l = 2, r = n - 1;
    while (l <= r) {
        const m = l + r >> 1, set1 = new Set([pre[m - 1]]), set2 = new Set();
        for (let hash = pre[m - 1], i = m; i < n; i++) {
            hash = (1e5 * hash + nums[i]) % mod;
            hash = (hash - dict[m] * nums[i - m] % mod + mod) % mod;
            if (set1.has(hash)) set2.add(hash);
            else set1.add(hash);
        }
        if (set1.size === set2.size) l = m + 1;
        else r = m - 1;
    }
    return l;
}
