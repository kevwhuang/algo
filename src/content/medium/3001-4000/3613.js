// 3613 - Minimize Maximum Component Cost

function minCost(n, edges, k) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    if (n === k) return 0;
    edges.sort((a, b) => a[2] - b[2]);
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        if (find(u) === find(v)) continue;
        if (--n === k) return edges[i][2];
        uf[uf[u]] = uf[v];
    }
}
