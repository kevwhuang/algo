// 2737 - Find the Closest Marked Node

function minimumDistance(n, edges, s, marked) {
    marked = new Set(marked);
    const adj = Array.from({ length: n }, () => new Map());
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        const w = Math.min(edges[i][2], adj[u].get(v) ?? 1e6);
        adj[u].set(v, w);
    }
    const costs = new Array(n);
    const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    pq.enqueue([s, 0]);
    while (pq.size()) {
        const [u, cost] = pq.dequeue();
        if (marked.has(u)) return cost;
        const neighbors = adj[u];
        for (const v of neighbors.keys()) {
            const nextCost = neighbors.get(v) + cost;
            if (nextCost >= costs[v]) continue;
            costs[v] = nextCost;
            pq.enqueue([v, nextCost]);
        }
    }
    return -1;
}
