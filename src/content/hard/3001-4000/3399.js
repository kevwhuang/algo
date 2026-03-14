// 3399 - Smallest Substring With Identical Characters II

function minLength(s, numOps) {
    const map = new Map(), n = s.length;
    let sum = 0, acc = 0, l = 0, r = -1;
    while (++r < n) {
        if (s[r] == r % 2) sum++;
        if (s[l] === s[r] && ++acc) continue;
        map.set(acc, (map.get(acc) ?? 0) + 1);
        acc = 1, l = r;
    }
    if (Math.min(sum, n - sum) <= numOps) return 1;
    map.set(acc, (map.get(acc) ?? 0) + 1);
    l = 2, r = n;
    while (l < r) {
        acc = 0;
        const m = l + r >> 1;
        for (const e of map) {
            acc += (e[0] / (m + 1) >> 0) * e[1];
            if (acc > numOps) break;
        }
        if (acc > numOps) l = m + 1;
        else r = m;
    }
    return r;
}
