// 684 - Redundant Connection

function findRedundantConnection(edges) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: edges.length + 1 }, (_, i) => i);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        if (find(u) === find(v)) return edges[i];
        uf[uf[u]] = uf[v];
    }
}
