// 1627 - Graph Connectivity With Threshold

function areConnected(n, threshold, queries) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: n + 1 }, (_, v) => v);
    for (let u = threshold + 1; u <= n; u++) {
        for (let v = 2 * u; v <= n; v += u) {
            uf[find(v)] = find(u);
        }
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i] = find(queries[i][0]) === find(queries[i][1]);
    }
    return queries;
}
