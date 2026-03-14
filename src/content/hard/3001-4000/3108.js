// 3108 - Minimum Cost Walk in Weighted Graph

function minimumCost(n, edges, query) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < edges.length; i++) {
        uf[find(edges[i][0])] = find(edges[i][1]);
    }
    for (let i = 0; i < n; i++) {
        find(i);
    }
    const C = new Map();
    for (let i = 0; i < edges.length; i++) {
        const v = uf[edges[i][0]];
        C.set(v, (C.get(v) ?? edges[i][2]) & edges[i][2]);
    }
    for (let i = 0; i < query.length; i++) {
        const v = uf[query[i][0]];
        query[i] = v === uf[query[i][1]] ? C.get(v) : -1;
    }
    return query;
}
