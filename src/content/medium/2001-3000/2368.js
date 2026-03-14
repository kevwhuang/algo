// 2368 - Reachable Nodes With Restrictions

function reachableNodes(n, edges, restricted) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    restricted = new Set(restricted);
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < edges.length; i++) {
        const v1 = edges[i][0], v2 = edges[i][1];
        if (restricted.has(v1) || restricted.has(v2)) continue;
        uf[find(v1)] = find(v2);
    }
    let reachable = 0;
    for (let i = 0; i < n; i++) {
        if (find(i) === uf[0]) reachable++;
    }
    return reachable;
}
