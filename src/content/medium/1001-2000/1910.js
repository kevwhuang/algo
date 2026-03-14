// 1910 - Remove All Occurrences of a Substring

function removeOccurrences(s, part) {
    while (true) {
        const n = s.length;
        s = s.replace(part, '');
        if (n === s.length) return s;
    }
}
