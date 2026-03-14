// 3372 - Maximize the Number of Target Nodes After Connecting Trees I

function maxTargetNodes(edges1, edges2, k) {
    function dfs(node, prev, acc, k) {
        if (acc > k) return 0;
        let count = 1, next = adj[node];
        for (let i = 0; i < next.length; i++) {
            if (next[i] !== prev) count += dfs(next[i], node, acc + 1, k);
        }
        return count;
    }
    let max = 0, m = edges2.length + 1, n = edges1.length + 1;
    let adj = Array.from({ length: m }, () => []);
    edges2.forEach(([u, v]) => adj[u].push(v) && adj[v].push(u));
    adj.forEach((_, v) => max = Math.max(dfs(v, -1, 0, k - 1), max));
    adj = Array.from({ length: n }, () => []);
    edges1.forEach(([u, v]) => adj[u].push(v) && adj[v].push(u));
    return Array.from({ length: n }, (_, v) => dfs(v, -1, 0, k) + max);
}
