// 4006. Count Valid Prefixes

function countValidPrefixes(s) {
    let res = 0;
    for (let acc = 0, i = 0; i < s.length; i++) {
        if (s[i] === '0') acc++;
        if (Math.abs(2 * acc - i - 1) <= 1) res++;
    }
    return res;
}
