// 3924. Minimum Threshold Path With Limited Heavy Edges

function minimumThreshold(n, edges, source, target, k) {
    if (!this.C) C = new Array(1000);
    const adj = Array.from({ length: n }, () => []);
    let max = 0;
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1], w = edges[i][2];
        adj[u].push([v, w]);
        adj[v].push([u, w]);
        max = Math.max(w, max);
    }
    let l = 0, r = max;
    while (l <= r) {
        C.fill(k + 1).fill(0, source, source + 1);
        const m = l + r >> 1;
        let Q = [[source, 0]];
        while (Q.length && C[target] > k) {
            const N = [];
            for (let i = 0; i < Q.length; i++) {
                const A = adj[Q[i][0]], w = Q[i][1];
                for (let j = 0; j < A.length; j++) {
                    const v = A[j][0], next = w + (A[j][1] > m);
                    if (next >= C[v]) continue;
                    C[v] = next;
                    N.push([v, next]);
                }
            }
            Q = N;
        }
        if (C[target] > k) l = m + 1;
        else r = m - 1;
    }
    return l < max + 1 ? l : -1;
}
