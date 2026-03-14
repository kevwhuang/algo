// 3006 - Find Beautiful Indices in the Given Array I

function beautifulIndices(s, a, b, k) {
    const idx1 = [], bound1 = s.length - a.length + 1;
    for (let i = 0; i < bound1; i++) {
        if (s.startsWith(a, i)) idx1.push(i);
    }
    if (idx1.length === 0) return [];
    const idx2 = [], bound2 = s.length - b.length + 1;
    for (let i = 0; i < bound2; i++) {
        if (s.startsWith(b, i)) idx2.push(i);
    }
    if (idx2.length === 0) return [];
    const res = [];
    for (let i = 0; i < idx1.length; i++) {
        const tgt = idx1[i];
        let l = 0, r = idx2.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (idx2[m] < tgt) l = m + 1;
            else r = m - 1;
        }
        if (l < idx2.length && Math.abs(tgt - idx2[l]) <= k) res.push(tgt);
        else if (l && Math.abs(tgt - idx2[l - 1]) <= k) res.push(tgt);
    }
    return res;
}
