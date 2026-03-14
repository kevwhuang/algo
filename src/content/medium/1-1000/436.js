// 436 - Find Right Interval

function findRightInterval(intervals) {
    function binarySearch(target) {
        let l = 0, r = len - 1;
        while (l <= r) {
            const m = (l + r) / 2 >> 0;
            if (intervals[m][0] < target) l = m + 1;
            else if (intervals[m][0] > target) r = m - 1;
            else return m;
        }
        return r + 1;
    }
    const len = intervals.length;
    for (let i = 0; i < len; i++) {
        intervals[i].push(i);
    }
    intervals.sort((a, b) => a[0] - b[0]);
    const res = new Array(len);
    for (let i = 0; i < res.length; i++) {
        const index = binarySearch(intervals[i][1]);
        res[intervals[i][2]] = index === len ? -1 : intervals[index][2];
    }
    return res;
}
