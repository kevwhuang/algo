// 3863 - Minimum Operations to Sort a String

function minOperations(s) {
    let flag, min = 'z', max = 'a', acc1 = 0, acc2 = 0, i = -1;
    while (++i < s.length) {
        const t = s[i];
        if (i && t < s[i - 1]) flag = true;
        if (t < min) min = t, acc1 = 1;
        else if (t === min) acc1++;
        if (t > max) max = t, acc2 = 1;
        else if (t === max) acc2++;
    }
    if (!flag) return 0;
    if (s.length === 2) return -1;
    if (s[0] === min || s.at(-1) === max) return 1;
    if (s[0] === max && s.at(-1) === min && acc1 < 2 && acc2 < 2) return 3;
    return 2;
}
