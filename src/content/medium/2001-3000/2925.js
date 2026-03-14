// 2925 - Maximum Score After Applying Operations on a Tree

function maximumScoreAfterOperations(edges, values) {
    function dfs(node, prev) {
        let sum = 0;
        for (let i = 0; i < adj[node].length; i++) {
            if (adj[node][i] === prev) continue;
            sum += dfs(adj[node][i], node);
        }
        return Math.min(values[node], sum || values[node]);
    }
    const adj = Array.from({ length: edges.length + 1 }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }
    return values.reduce((s, e) => s + e) - dfs(0);
}
