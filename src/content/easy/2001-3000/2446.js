// 2446 - Determine If Two Events Have Conflict

function haveConflict(event1, event2) {
    const convert = s => +(s[0] + s[1]) * 60 + +(s[3] + s[4]);
    event1[0] = convert(event1[0]);
    event1[1] = convert(event1[1]);
    event2[0] = convert(event2[0]);
    event2[1] = convert(event2[1]);
    return Math.max(event1[0], event2[0]) <= Math.min(event1[1], event2[1]);
}
