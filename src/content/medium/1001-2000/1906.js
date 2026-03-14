// 1906 - Minimum Absolute Difference Queries

function minDifference(nums, queries) {
    const arr = Array.from({ length: Math.max(...nums) + 1 }, () => []);
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]].push(i);
    }
    for (let i = 0; i < queries.length; i++) {
        let abs = 100, prev;
        const start = queries[i][0], end = queries[i][1];
        for (let n = 1; n < arr.length; n++) {
            const indices = arr[n];
            if (indices.length === 0) continue;
            let l = 0, r = indices.length - 1;
            while (l <= r) {
                const m = l + r >> 1;
                if (start <= indices[m] && indices[m] <= end) break;
                if (indices[m] < start) l = m + 1;
                else r = m - 1;
            }
            if (l > r) continue;
            if (prev) abs = Math.min(n - prev, abs);
            prev = n;
        }
        queries[i] = abs === 100 ? -1 : abs;
    }
    return queries;
}
