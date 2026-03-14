// 1202 - Smallest String With Swaps

function smallestStringWithSwaps(s, pairs) {
    function find(v) {
        if (v === uf[v]) return v;
        uf[v] = find(uf[v]);
        return uf[v];
    }
    const uf = Array.from({ length: s.length }, (_, i) => i);
    for (let i = 0; i < pairs.length; i++) {
        uf[find(pairs[i][0])] = find(pairs[i][1]);
    }
    const components = {};
    for (let i = 0; i < s.length; i++) {
        find(i);
        if (!(uf[i] in components)) components[uf[i]] = [];
        components[uf[i]].push(i);
    }
    const res = new Array(s.length);
    for (const root in components) {
        const indices = components[root];
        if (indices.length === 1) {
            res[indices[0]] = s[indices[0]];
            continue;
        }
        const cur = new Array(indices.length);
        for (let i = 0; i < cur.length; i++) {
            cur[i] = s[indices[i]];
        }
        cur.sort();
        for (let i = 0; i < cur.length; i++) {
            res[indices[i]] = cur[i];
        }
    }
    return res.join('');
}
