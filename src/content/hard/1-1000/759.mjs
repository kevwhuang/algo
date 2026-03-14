// 759 - Employee Free Time

function employeeFreeTime(schedule) {
    const M = [];
    schedule.forEach(e => e.forEach(f => M.push(f)));
    M.sort((a, b) => a.start - b.start);
    const res = [];
    for (let max = M[0].end, i = 1; i < M.length; i++) {
        if (M[i].start > max) res.push(new Interval(max, M[i].start));
        max = Math.max(M[i].end, max);
    }
    return res;
}
