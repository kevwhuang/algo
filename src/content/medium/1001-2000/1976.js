// 1976 - Number of Ways to Arrive at Destination

function countPaths(n, roads) {
    const adj = Array.from({ length: n }, () => []);
    roads.forEach(([u, v, w]) => adj[u].push([v, w]) && adj[v].push([u, w]));
    const ways = new Array(n).fill(0);
    ways[0] = 1;
    const costs = new Array(n).fill(Infinity);
    costs[0] = 0;
    const queue = [[0, 0]], mod = 1000000007;
    while (true) {
        const [u, cost] = queue.shift();
        if (u === n - 1) return ways[u];
        if (costs[u] < cost) continue;
        for (let i = 0; i < adj[u].length; i++) {
            const v = adj[u][i][0];
            const nextCost = adj[u][i][1] + cost;
            if (nextCost === costs[v]) ways[v] = (ways[v] + ways[u]) % mod;
            if (nextCost >= costs[v]) continue;
            ways[v] = ways[u];
            costs[v] = nextCost;
            queue.push([v, nextCost]);
        }
        queue.sort((a, b) => a[1] - b[1]);
    }
}
