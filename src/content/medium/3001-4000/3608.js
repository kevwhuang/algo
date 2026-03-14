// 3608 - Minimum Time for K Connected Components

function minTime(n, edges, k) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    edges.sort((a, b) => b[2] - a[2]);
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        if (find(u) === find(v)) continue;
        uf[uf[u]] = uf[v];
        if (--n < k) return edges[i][2];
    }
    return 0;
}
