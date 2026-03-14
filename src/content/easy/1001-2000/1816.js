// 1816 - Truncate Sentence

function truncateSentence(s, k) {
    let acc = 0, i = -1;
    while (++i < s.length) {
        if (s[i] === ' ' && ++acc === k) return s.slice(0, i);
    }
    return s;
}
