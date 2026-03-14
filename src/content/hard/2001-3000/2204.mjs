// 2204 - Distance to a Cycle in Undirected Graph

function distanceToCycle(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    const deg = new Uint32Array(n);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        adj[u].push(v);
        adj[v].push(u);
        deg[u]++, deg[v]++;
    }
    let Q = [];
    for (let v = 0; v < n; v++) {
        if (deg[v] === 1) Q.push(v);
    }
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            adj[Q[i]].forEach(v => deg[v] && --deg[v] === 1 && N.push(v));
            deg[Q[i]]--;
        }
        Q = N;
    }
    for (let v = 0; v < n; v++) {
        if (deg[v]) Q.push(v);
    }
    const res = new Uint32Array(n);
    let acc = 1;
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const arr = adj[Q[i]];
            for (let j = 0; j < arr.length; j++) {
                const v = arr[j];
                if (res[v] || deg[v]) continue;
                res[v] = acc;
                N.push(v);
            }
        }
        acc++, Q = N;
    }
    return res;
}
