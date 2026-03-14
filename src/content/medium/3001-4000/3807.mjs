// 3807 - Minimum Cost to Repair Edges to Traverse a Graph

function minCost(n, edges, k) {
    if (!this.seen) seen = new Uint8Array(50000), seen[0] = 1;
    const A = new Uint32Array(edges.length);
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1], w = edges[i][2];
        A[i] = w;
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }
    if (adj[n - 1].length === 0) return -1;
    A.sort();
    let l = 0, r = A.length - 1;
    while (l <= r) {
        seen.fill(0, 1, n);
        let acc = 1, Q = [0];
        const m = l + r >> 1, tgt = A[m];
        while (acc <= k && Q.length) {
            const N = [];
            for (let i = 0; i < Q.length; i++) {
                const next = adj[Q[i]];
                for (let j = 0; j < next.length; j++) {
                    const v = next[j][0], w = next[j][1];
                    if (seen[v] || w > tgt) continue;
                    seen[v] = 1;
                    N.push(v);
                    if (v === n - 1) acc = i = j = Infinity;
                }
            }
            acc++, Q = N;
        }
        if (seen[n - 1] === 0) l = m + 1;
        else r = m - 1;
    }
    return l < A.length ? A[l] : -1;
}
