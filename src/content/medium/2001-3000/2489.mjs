// 2489 - Number of Substrings With Fixed Ratio

function fixedRatio(s, num1, num2) {
    let substrings = 0, acc = 0;
    const map = new Map([[0, 1]]);
    for (let i = 0; i < s.length; i++) {
        acc += s[i] === '0' ? num2 : -num1;
        const f = map.get(acc) ?? 0;
        substrings += f;
        map.set(acc, f + 1);
    }
    return substrings;
}
