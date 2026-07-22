// 3975. Filter Occupied Intervals

function filterOccupiedIntervals(occupiedIntervals, freeStart, freeEnd) {
    const M1 = [], M2 = occupiedIntervals, ll = freeStart, rr = freeEnd;
    for (let i = 0; i < M2.length; i++) {
        const l = M2[i][0], r = M2[i][1];
        if (l > rr || r < ll) M1.push(M2[i]);
        else if (l < ll && r <= rr) M1.push([l, ll - 1]);
        else if (l >= ll && r > rr) M1.push([rr + 1, r]);
        else if (l < ll && r > rr) M1.push([l, ll - 1], [rr + 1, r]);
    }
    M1.sort((a, b) => a[0] - b[0]);
    const res = M1.length ? [M1[0]] : [];
    for (let i = 1; i < M1.length; i++) {
        if (M1[i][0] > res.at(-1)[1] + 1) res.push(M1[i]);
        else res.at(-1)[1] = Math.max(M1[i][1], res.at(-1)[1]);
    }
    return res;
}
