// 323 - Number of Connected Components in an Undirected Graph

function countComponents(n, edges) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        if (find(u) !== find(v)) uf[uf[u]] = uf[v], n--;
    }
    return n;
}
