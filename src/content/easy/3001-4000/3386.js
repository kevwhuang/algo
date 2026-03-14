// 3386 - Button With Longest Push Time

function buttonWithLongestTime(events) {
    let res = events[0][0], max = events[0][1];
    for (let i = 1; i < events.length; i++) {
        const d = events[i][1] - events[i - 1][1];
        if (d === max) res = Math.min(events[i][0], res);
        else if (d > max) res = events[i][0], max = d;
    }
    return res;
}
