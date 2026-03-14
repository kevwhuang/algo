// 2054 - Two Best Non-Overlapping Events

function maxTwoEvents(events) {
    let res = 0, max = 0;
    const l = events.sort((a, b) => a[0] - b[0]);
    const r = events.toSorted((a, b) => a[1] - b[1]);
    for (let i = 0, j = 0; i < events.length; i++) {
        while (r[j][1] < l[i][0]) max = Math.max(r[j++][2], max);
        res = Math.max(l[i][2] + max, res);
    }
    return res;
}
