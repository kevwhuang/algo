// 1229 - Meeting Scheduler

function minAvailableDuration(slots1, slots2, duration) {
    slots1.sort((a, b) => a[0] - b[0]);
    slots2.sort((a, b) => a[0] - b[0]);
    let interval, i = 0, j = 0;
    while (i < slots1.length && j < slots2.length) {
        const l1 = slots1[i][0], r1 = slots1[i][1];
        const l2 = slots2[j][0], r2 = slots2[j][1];
        if (r1 < l2) ++i;
        else if (r2 < l1) ++j;
        else if (l1 < l2 && r1 < r2 && ++i) interval = [l2, r1];
        else if (l2 < l1 && r2 < r1 && ++j) interval = [l1, r2];
        else if (l2 <= l1 && r1 <= r2 && ++i) interval = [l1, r1];
        else if (++j) interval = [l2, r2];
        if (!interval) continue;
        const start = interval[0], end = interval[1];
        if (end - start < duration) continue;
        return [start, start + duration];
    }
    return [];
}
