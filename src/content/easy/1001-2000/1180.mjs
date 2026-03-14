// 1180 - Count Substrings With Only One Distinct Letter

function countLetters(s) {
    let res = 1, acc = 1, i = 0;
    while (++i < s.length) {
        if (s[i - 1] === s[i]) res += ++acc;
        else res += acc = 1;
    }
    return res;
}
