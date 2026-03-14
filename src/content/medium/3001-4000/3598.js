// 3598 - Longest Common Prefix Between Adjacent Strings After Removals

function longestCommonPrefix(words) {
    function check(s, t) {
        const min = Math.min(s.length, t.length);
        let i = 0;
        while (i < min && s[i] === t[i]) i++;
        return i;
    }
    if (!this.ps) ps = new Uint16Array(100000), ss = new Uint16Array(100000);
    const n = words.length, nn = n - 1;
    ps[0] = ss[n - 1] = 0;
    for (let i = 1; i < nn; i++) {
        ps[i] = Math.max(check(words[i - 1], words[i]), ps[i - 1]);
    }
    for (let i = n - 2; i > 0; i--) {
        ss[i] = Math.max(check(words[i], words[i + 1]), ss[i + 1]);
    }
    const res = new Uint16Array(n);
    if (n > 1) res[0] = ss[1], res[n - 1] = ps[n - 2];
    for (let i = 1; i < nn; i++) {
        const max = Math.max(ps[i - 1], ss[i + 1]);
        res[i] = Math.max(check(words[i - 1], words[i + 1]), max);
    }
    return res;
}
