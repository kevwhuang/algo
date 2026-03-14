// 3803 - Count Residue Prefixes

function residuePrefixes(s) {
    let res = 0;
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        set.add(s[i]);
        if (set.size === (i + 1) % 3) res++;
    }
    return res;
}
