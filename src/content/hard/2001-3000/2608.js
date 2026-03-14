// 2608 - Shortest Cycle in a Graph

function findShortestCycle(n, edges) {
    const deg = new Uint16Array(n);
    edges.forEach(e => ++deg[e[0]] && ++deg[e[1]]);
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        if (deg[u] > 1 || deg[v] > 1) adj[u].push(v) && adj[v].push(u);
    }
    let res = Infinity;
    const seen = new Uint8Array(n);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        if (deg[u] < 2 || deg[v] < 2) continue;
        seen.fill(0);
        seen[u] = 1;
        let acc = 3, Q = adj[u].filter(e => e !== v);
        while (acc < res && Q.length) {
            const N = [];
            for (let j = 0; j < Q.length; j++) {
                const arr = adj[Q[j]];
                for (let k = 0; k < arr.length; k++) {
                    const w = arr[k];
                    if (w === v && (res = acc)) break;
                    if (seen[w]) continue;
                    seen[w] = 1;
                    N.push(w);
                }
                if (res === acc) break;
            }
            acc++, Q = N;
        }
    }
    return res === Infinity ? -1 : res;
}
