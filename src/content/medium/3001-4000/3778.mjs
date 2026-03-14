// 3778 - Minimum Distance Excluding One Maximum Weighted Edge

function minCostExcludingMax(n, edges) {
    function fn(u) {
        const pq = new PriorityQueue((a, b) => a[1] - b[1]);
        pq.enqueue([u, 0]);
        const C = new Array(n).fill(Infinity).fill(0, u, u + 1);
        while (pq.size()) {
            const uu = pq.front()[0], w = pq.dequeue()[1], A = adj[uu];
            if (w > C[uu]) continue;
            for (let i = 0; i < A.length; i++) {
                const v = A[i][0], next = w + A[i][1];
                if (next >= C[v]) continue;
                C[v] = next;
                pq.enqueue([v, next]);
            }
        }
        return C;
    }
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1], w = edges[i][2];
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }
    let res = Infinity;
    const C1 = fn(0), C2 = fn(n - 1);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        res = Math.min(C1[u] + C2[v], C1[v] + C2[u], res);
    }
    return res;
}
