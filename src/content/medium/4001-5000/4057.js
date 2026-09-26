// 4057. Number of Intersecting Interval Pairs II

function countIntersectingIntervals(intervals) {
    let res = 0;
    const n = intervals.sort((a, b) => a[0] - b[0]).length;
    for (let i = 0; i < n; i++) {
        const tgt = intervals[i][1];
        let l = i + 1, r = n - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (intervals[m][0] <= tgt) l = m + 1;
            else r = m - 1;
        }
        res += r - i;
    }
    return res;
}
