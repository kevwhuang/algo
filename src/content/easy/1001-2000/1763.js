// 1763 - Longest Nice Substring

function longestNiceSubstring(s) {
    if (s.length < 2) return '';
    const set = new Set(s);
    for (let i = 0; i < s.length; i++) {
        const str1 = s[i].toLowerCase(), str2 = s[i].toUpperCase();
        if (set.has(str1) && set.has(str2)) continue;
        const left = longestNiceSubstring(s.slice(0, i));
        const right = longestNiceSubstring(s.slice(i + 1));
        return left.length >= right.length ? left : right;
    }
    return s;
}
