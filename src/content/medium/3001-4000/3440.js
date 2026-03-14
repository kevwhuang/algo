// 3440 - Reschedule Meetings for Maximum Free Time II

function maxFreeTime(eventTime, startTime, endTime) {
    const n = startTime.length;
    const ss = new Uint32Array(n + 1);
    for (let i = n - 1; ~i; i--) {
        const right = i + 1 < n ? startTime[i + 1] : eventTime;
        ss[i] = Math.max(right - endTime[i], ss[i + 1]);
    }
    let res = 0, max = startTime[0];
    for (let i = 0; i < n; i++) {
        if (i >= 2) max = Math.max(startTime[i - 1] - endTime[i - 2], max);
        const right = i + 1 < n ? startTime[i + 1] : eventTime;
        const left = i ? endTime[i - 1] : 0;
        let d = endTime[i] - startTime[i];
        if (i && d <= max || d <= ss[i + 1]) d = 0;
        res = Math.max(right - left - d, res);
    }
    return res;
}
