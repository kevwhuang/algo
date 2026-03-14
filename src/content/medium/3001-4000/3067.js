// 3067 - Count Pairs of Connectable Servers in a Weighted Tree Network

function countPairsOfConnectableServers(edges, signalSpeed) {
    function dfs(node, prev, dist) {
        let count = dist % signalSpeed ? 0 : 1;
        const neighbors = adj[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (neighbors[i][0] === prev) continue;
            count += dfs(neighbors[i][0], node, neighbors[i][1] + dist);
        }
        return count;
    }
    const adj = Array.from({ length: edges.length + 1 }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const a = edges[i][0], b = edges[i][1], w = edges[i][2];
        adj[a].push([b, w]);
        adj[b].push([a, w]);
    }
    const pairs = new Uint32Array(adj.length);
    for (let n = 0; n < adj.length; n++) {
        const neighbors = adj[n];
        if (neighbors.length === 1) continue;
        const counts = new Uint16Array(neighbors.length);
        for (let i = 0; i < neighbors.length; i++) {
            counts[i] = dfs(neighbors[i][0], n, neighbors[i][1]);
        }
        let sum = counts.reduce((s, e) => s + e);
        for (let i = 0; i < counts.length; i++) {
            sum -= counts[i];
            pairs[n] += counts[i] * sum;
        }
    }
    return pairs;
}
