// 3469 - Find Minimum Cost to Remove Array Elements

function minCost(nums) {
    let dp = new Map([[nums[0], 0]]);
    const n = nums.length;
    for (let i = 1; i <= n; i += 2) {
        const N = new Map();
        const cur = i < n ? nums[i] : 0;
        const next = i + 1 < n ? nums[i + 1] : 1e9;
        for (const e of dp) {
            let a = Math.min(e[0], next);
            let b = Math.max(e[0], next);
            let c = cur;
            if (cur < a) c = b, b = a, a = cur;
            else if (cur < b) c = b, b = cur;
            N.set(a, Math.min(N.get(a) ?? 1e9, e[1] + c));
            N.set(c, Math.min(N.get(c) ?? 1e9, e[1] + b));
        }
        dp = N;
    }
    return Math.min(...dp.values());
}
