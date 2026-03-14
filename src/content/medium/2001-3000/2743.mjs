// 2743 - Count Substrings Without Repeating Character

function numberOfSpecialSubstrings(s) {
    let substrings = 0, l = 0, r = -1;
    const bucket = new Array(26).fill(0);
    while (++r < s.length) {
        const code = s.charCodeAt(r) - 97;
        bucket[code]++;
        while (bucket[code] > 1) bucket[s.charCodeAt(l++) - 97]--;
        substrings += r - l + 1;
    }
    return substrings;
}
