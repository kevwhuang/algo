// 3488 - Closest Equal Element Queries

function solveQueries(nums, queries) {
    const map = new Map(), n = nums.length;
    const arr = new Uint32Array(n).fill(-1);
    for (let r = 0; r < n; r++) {
        if (map.has(nums[r])) {
            const l = map.get(nums[r]);
            arr[l] = Math.min(r - l, arr[l]);
            arr[r] = r - l;
        }
        map.set(nums[r], r);
    }
    for (let r = 0; r < n; r++) {
        const l = map.get(nums[r]);
        arr[l] = Math.min(n + r - l, arr[l]);
        arr[r] = Math.min(n + r - l, arr[r]);
        map.set(nums[r], r);
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i] = arr[queries[i]] < n ? arr[queries[i]] : -1;
    }
    return queries;
}
