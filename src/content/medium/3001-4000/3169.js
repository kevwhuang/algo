// 3169 - Count Days Without Meetings

function countDays(days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);
    let res = 0, end = 0;
    for (let i = 0; i < meetings.length; i++) {
        const cur = meetings[i];
        if (cur[0] > end) res += cur[0] - end - 1;
        if (cur[1] > end) end = cur[1];
    }
    return res + days - end;
}
