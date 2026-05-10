// 3921. Score Validator

function scoreValidator(events) {
    let acc1 = 0, acc2 = 0;
    for (let i = 0; acc2 < 10 && i < events.length; i++) {
        const s = events[i];
        if (s === 'W') acc2++;
        else acc1 += s.length === 1 ? Number(s) : 1;
    }
    return [acc1, acc2];
}
