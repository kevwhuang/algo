// 3775 - Reverse Words With Same Vowel Count

function reverseWords(s) {
    let res = '', tgt = 0, acc, i = 0, l;
    const set = new Set(['a', 'e', 'i', 'o', 'u']), n = s.length;
    while (i < n && s[i] > ' ') tgt += set.has(s[i]) ? 1 : 0, res += s[i++];
    while (++i < n) {
        res += ' ', acc = 0, l = i;
        while (i < n && s[i] > ' ') acc += set.has(s[i++]) ? 1 : 0;
        if (acc !== tgt && (res += s.slice(l, i))) continue;
        let r = i;
        while (--r >= l) res += s[r];
    }
    return res;
}
