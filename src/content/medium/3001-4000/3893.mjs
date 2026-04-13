// 3893. Maximum Team Size With Overlapping Intervals

function maximumTeamSize(startTime, endTime) {
    let res = 1;
    const A1 = new Uint32Array(startTime).sort();
    const A2 = new Uint32Array(endTime).sort();
    const n = A1.length;
    for (let i = 0; i < n; i++) {
        let tgt = endTime[i], l = 0, r = n - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (A1[m] <= tgt) l = m + 1;
            else r = m - 1;
        }
        const right = l;
        tgt = startTime[i], l = 0, r = n - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (A2[m] < tgt) l = m + 1;
            else r = m - 1;
        }
        res = Math.max(right - l, res);
    }
    return res;
}
