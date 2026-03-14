// 3112 - Minimum Time to Visit Disappearing Nodes

function minimumTime(n, edges, disappear) {
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        adj[edge[0]].push([edge[1], edge[2]]);
        adj[edge[1]].push([edge[0], edge[2]]);
    }
    const costs = new Array(n);
    const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    pq.enqueue([0, 0]);
    const seen = new Set();
    while (pq.size()) {
        const [u, cost] = pq.dequeue();
        if (seen.has(u)) continue;
        seen.add(u);
        const neighbors = adj[u];
        for (let i = 0; i < neighbors.length; i++) {
            const v = neighbors[i][0];
            const nextCost = neighbors[i][1] + cost;
            if (nextCost >= disappear[v]) continue;
            if (nextCost >= costs[v]) continue;
            costs[v] = nextCost;
            pq.enqueue([v, nextCost]);
        }
    }
    costs[0] = 0;
    for (let i = 1; i < n; i++) {
        costs[i] ??= -1;
    }
    return costs;
}
