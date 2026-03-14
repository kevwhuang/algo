// 2406 - Divide Intervals Into Minimum Number of Groups

function minGroups(intervals) {
    let max = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] > max) max = intervals[i][1];
    }
    const ps = new Array(max + 2).fill(0);
    for (let i = 0; i < intervals.length; i++) {
        ps[intervals[i][0]]++;
        ps[intervals[i][1] + 1]--;
    }
    let groups = 0, acc = 0;
    for (let n = 1; n < ps.length; n++) {
        groups = Math.max(acc += ps[n], groups);
    }
    return groups;
}
