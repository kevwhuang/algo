// 261 - Graph Valid Tree

function validTree(n, edges) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    if (n - 1 !== edges.length) return false;
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        if (find(u) === find(v)) return false;
        uf[uf[u]] = uf[v];
    }
    return true;
}
