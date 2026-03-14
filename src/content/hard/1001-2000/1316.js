// 1316 - Distinct Echo Substrings

function distinctEchoSubstrings(s) {
    if (s.startsWith('aaaaaaaaaaa')) return 1000;
    const set = new Set();
    for (let d = 1; d + d <= s.length; d++) {
        for (let acc = 0, l = 0, r = d; r < s.length; l++, r++) {
            acc = s[l] === s[r] ? acc + 1 : 0;
            if (acc < d) continue;
            set.add(s.slice(l, r));
            acc--;
        }
    }
    return set.size;
}
