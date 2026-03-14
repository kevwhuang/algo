// 1712 - Ways to Split Array Into Three Subarrays

function waysToSplit(nums) {
    const ps = nums;
    for (let i = 1; i < ps.length; i++) {
        ps[i] += ps[i - 1];
    }
    let splits = 0;
    const sum = ps[ps.length - 1], bound = ps.length - 2;
    for (let i = 0; i < bound; i++) {
        let start1, l = i + 1, r = bound;
        while (l <= r) {
            const m = l + r >> 1;
            if (ps[i] > ps[m] - ps[i]) l = m + 1;
            else r = (start1 = m) - 1;
        }
        if (!start1) break;
        l = start1 + 1, r = ps.length - 1;
        let start2;
        while (l <= r) {
            const m = l + r >> 1;
            if (ps[m - 1] - ps[i] > sum - ps[m - 1]) r = m - 1;
            else l = (start2 = m) + 1;
        }
        if (!start2) continue;
        splits = (splits + start2 - start1) % 1000000007;
    }
    return splits;
}
