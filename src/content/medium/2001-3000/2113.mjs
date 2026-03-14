// 2113 - Elements in Array After Removing and Replacing Elements

function elementInNums(nums, queries) {
    const m = nums.length, n = queries.length, mm = m + m;
    const res = new Int8Array(n);
    for (let i = 0; i < n; i++) {
        let idx = queries[i][0] % mm, lim = m;
        if (idx > m) lim = idx - m, idx = 0;
        idx += queries[i][1];
        res[i] = idx < lim ? nums[idx] : -1;
    }
    return res;
}
