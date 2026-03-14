// 1443 - Minimum Time to Collect All Apples in a Tree

function minTime(n, edges, hasApple) {
    function dfs(node, prev) {
        let dist = 0;
        const neighbors = adj[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (neighbors[i] === prev) continue;
            dist += dfs(neighbors[i], node);
        }
        if (node === 0) return dist;
        if (dist || hasApple[node]) dist += 2;
        return dist;
    }
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }
    return dfs(0);
}
