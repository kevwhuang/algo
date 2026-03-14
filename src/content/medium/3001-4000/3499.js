// 3499 - Maximize Active Section With Trade I

function maxActiveSectionsAfterTrade(s) {
    let res = 0, acc = 0, l = -1, r, i = 0;
    while (i < s.length) {
        if (s[i] === '1' && ++acc && ++i) continue;
        const ll = i;
        while (i < s.length && s[i] === '0') i++;
        if (~l) res = Math.max(i + r - l - ll, res);
        l = ll, r = i;
    }
    return res + acc;
}
