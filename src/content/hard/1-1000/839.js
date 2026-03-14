// 839 - Similar String Groups

function numSimilarGroups(strs) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const m = strs.length, n = strs[0].length;
    const uf = Array.from({ length: m }, (_, i) => i);
    const map = new Map();
    for (let i = 0; i < m; i++) {
        const s = strs[i];
        for (const t of map.keys()) {
            let acc = 0, j = -1;
            while (acc < 3 && ++j < n) if (s[j] !== t[j]) acc++;
            if (acc < 3) uf[find(map.get(t))] = i;
        }
        map.set(s, i);
    }
    for (let i = 0; i < m; i++) {
        find(i);
    }
    return new Set(uf).size;
}
