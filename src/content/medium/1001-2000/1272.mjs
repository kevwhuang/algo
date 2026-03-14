// 1272 - Remove Interval

function removeInterval(intervals, toBeRemoved) {
    const res = [], ll = toBeRemoved[0], rr = toBeRemoved[1];
    for (let i = 0; i < intervals.length; i++) {
        const l = intervals[i][0], r = intervals[i][1];
        if (ll < l && r < rr) continue;
        if (r <= ll || rr <= l) res.push(intervals[i]);
        else if (ll < r && r < rr) res.push([l, ll]);
        else if (ll < l && l < rr) res.push([rr, r]);
        else {
            if (l !== ll) res.push([l, ll]);
            if (r !== rr) res.push([rr, r]);
        }
    }
    return res;
}
