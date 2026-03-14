// 3438 - Find Valid Pair of Adjacent Digits in String

function findValidPair(s) {
    const B = new Array(10).fill(0);
    for (let i = 0; i < s.length; i++) {
        B[s[i]]++;
    }
    let a = Number(s[0]), i = 0;
    while (++i < s.length) {
        const b = Number(s[i]);
        if (a !== b && a === B[a] && b === B[b]) break;
        a = b;
    }
    return i < s.length ? s.slice(i - 1, i + 1) : '';
}
