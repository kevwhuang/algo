// 2473 - Minimum Cost to Buy Apples

function minCost(n, roads, appleCost, k) {
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < roads.length; i++) {
        const u = roads[i][0] - 1, v = roads[i][1] - 1, w = roads[i][2];
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }
    const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    for (let node = 0; node < n; node++) {
        pq.enqueue([node, appleCost[node]]);
    }
    const res = new Array(n);
    while (pq.size()) {
        const [u, cost] = pq.dequeue();
        if (res[u]) continue;
        res[u] = cost;
        const neighbors = adj[u];
        for (let i = 0; i < neighbors.length; i++) {
            const v = neighbors[i][0];
            if (res[v]) continue;
            const nextCost = (1 + k) * neighbors[i][1] + cost;
            pq.enqueue([v, nextCost]);
        }
    }
    return res;
}
