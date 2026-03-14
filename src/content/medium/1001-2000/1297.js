// 1297 - Maximum Number of Occurrences of a Substring

function maxFreq(s, maxLetters, minSize, maxSize) {
    const map1 = new Map(), map2 = new Map();
    let r = 0;
    while (r < minSize) map1.set(s[r], map1.get(s[r++]) + 1 || 1);
    if (map1.size <= maxLetters) map2.set(s.slice(0, minSize), 1);
    while (r < s.length) {
        map1.set(s[r], map1.get(s[r]) + 1 || 1);
        const nextFreq = map1.get(s[r - minSize]) - 1;
        if (nextFreq) map1.set(s[r++ - minSize], nextFreq);
        else map1.delete(s[r++ - minSize]);
        if (map1.size > maxLetters) continue;
        const substring = s.slice(r - minSize, r);
        map2.set(substring, map2.get(substring) + 1 || 1);
    }
    return map2.size ? Math.max(...map2.values()) : 0;
}
