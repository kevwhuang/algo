// 2203 - Minimum Weighted Subgraph With the Required Paths

function minimumWeight(n, edges, src1, src2, dest) {
    function check(tgt, adj) {
        const C = new Array(n).fill(1e15);
        C[tgt] = 0;
        const pq = new PriorityQueue((a, b) => a[1] - b[1]);
        pq.enqueue([tgt, 0]);
        while (pq.size()) {
            const u = pq.front()[0], w = pq.dequeue()[1], arr = adj[u];
            if (w > C[u]) continue;
            for (let i = 0; i < arr.length; i++) {
                const v = arr[i][0], next = w + arr[i][1];
                if (next >= C[v]) continue;
                C[v] = next;
                pq.enqueue([v, next]);
            }
        }
        return C;
    }
    const adj1 = Array.from({ length: n }, () => []);
    const adj2 = Array.from({ length: n }, () => []);
    edges.forEach(e => adj1[e[0]].push([e[1], e[2]]));
    edges.forEach(e => adj2[e[1]].push([e[0], e[2]]));
    const C1 = check(src1, adj1);
    const C2 = check(src2, adj1);
    const C3 = check(dest, adj2);
    const res = C1.reduce((s, e, i) => Math.min(e + C2[i] + C3[i], s), 1e15);
    return res < 1e15 ? res : -1;
}
