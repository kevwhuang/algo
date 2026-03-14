// 924 - Minimize Malware Spread

function minMalwareSpread(graph, initial) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const n = graph.length;
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let r = 1; r < n; r++) {
        for (let c = 0; c < r; c++) {
            if (graph[r][c]) uf[find(r)] = find(c);
        }
    }
    const B1 = new (n < 256 ? Uint8Array : Uint16Array)(n);
    for (let v = 0; v < n; v++) {
        B1[find(v)]++;
    }
    const B2 = new (n < 256 ? Uint8Array : Uint16Array)(n);
    initial.forEach(v => B2[uf[v]]++);
    if (!B2.includes(1)) return Math.min(...initial);
    let res, max = 0, i = -1;
    while (++i < initial.length) {
        const u = initial[i], v = uf[u];
        if (B2[v] > 1) continue;
        if (B1[v] === max) res = Math.min(u, res);
        else if (B1[v] > max) res = u, max = B1[v];
    }
    return res;
}
