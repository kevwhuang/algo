// 3493 - Properties Graph

function numberOfComponents(properties, k) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const n = properties.length;
    const uf = Array.from({ length: n }, (_, i) => i);
    const M = Array.from({ length: n }, () => new Uint8Array(101));
    for (let u = 0; u < n; u++) {
        properties[u].forEach(e => M[u][e] = 1);
        for (let v = 0; v < u; v++) {
            let acc = 0, i = 0;
            while (++i < 101) if (M[u][i] && M[v][i]) acc++;
            if (acc >= k) uf[find(u)] = find(v);
        }
    }
    return uf.reduce((s, _, v) => s + (v === find(v) ? 1 : 0), 0);
}
