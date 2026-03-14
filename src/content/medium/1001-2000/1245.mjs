// 1245 - Tree Diameter

function treeDiameter(edges) {
    function dfs(count, node, prev) {
        if (count > diameter) diameter = count, start = node;
        for (let i = 0; i < adj[node].length; i++) {
            const next = adj[node][i];
            if (next === prev) continue;
            dfs(count + 1, next, node);
        }
    }
    if (edges.length === 0) return 0;
    const adj = Array.from({ length: edges.length + 1 }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }
    let diameter = 0, start;
    dfs(0, 0);
    dfs(0, start);
    return diameter;
}
