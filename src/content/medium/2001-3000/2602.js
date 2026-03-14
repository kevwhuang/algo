// 2602 - Minimum Operations to Make All Array Elements Equal

function minOperations(nums, queries) {
    nums = new Uint32Array(nums).sort();
    const n = nums.length, prefix = new Array(n);
    prefix[0] = nums[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }
    for (let i = 0; i < queries.length; i++) {
        let l = 0, r = n - 1;
        while (l < r) {
            const m = l + r >> 1;
            if (nums[m] < queries[i]) l = m + 1;
            else r = m;
        }
        if (nums[l] < queries[i]) l++;
        queries[i] = queries[i] * (l + l - n) + prefix[n - 1];
        if (l) queries[i] -= 2 * prefix[l - 1];
    }
    return queries;
}
