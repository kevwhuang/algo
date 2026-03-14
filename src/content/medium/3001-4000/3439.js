// 3439 - Reschedule Meetings for Maximum Free Time I

function maxFreeTime(eventTime, k, startTime, endTime) {
    let res = 0, acc = 0;
    const n = startTime.length;
    for (let i = 0; i < n; i++) {
        acc += endTime[i] - startTime[i];
        if (i >= k) acc -= endTime[i - k] - startTime[i - k];
        if (i + 1 < k) continue;
        const right = i + 1 < n ? startTime[i + 1] : eventTime;
        const left = i >= k ? endTime[i - k] : 0;
        res = Math.max(right - left - acc, res);
    }
    return res;
}
