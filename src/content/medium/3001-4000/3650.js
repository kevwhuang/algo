// 3650 - Minimum Cost Path With Edge Reversals

function minCost(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1], w = edges[i][2];
        adj[u].push([v, w]);
        adj[v].push([u, w + w]);
    }
    const C = { 0: 0 };
    const pq = new PriorityQueue((a, b) => a[1] - b[1]);
    pq.enqueue([0, 0]);
    while (pq.size()) {
        const u = pq.front()[0], w = pq.dequeue()[1], arr = adj[u];
        if (u === n - 1) return w;
        for (let i = 0; i < arr.length; i++) {
            const v = arr[i][0], next = w + arr[i][1];
            if (next >= C[v]) continue;
            C[v] = next;
            pq.enqueue([v, next]);
        }
    }
    return -1;
}
