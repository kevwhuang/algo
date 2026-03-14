// 802 - Find Eventual Safe States

function eventualSafeNodes(graph) {
    function dfs(node) {
        if (seen[node]) return seen[node] === 2;
        seen[node] = 1;
        for (let i = 0; i < graph[node].length; i++) {
            if (!dfs(graph[node][i])) return false;
        }
        return seen[node] = 2;
    }
    const safe = [];
    const seen = new Uint8Array(graph.length);
    for (let n = 0; n < graph.length; n++) {
        if (dfs(n)) safe.push(n);
    }
    return safe;
}
