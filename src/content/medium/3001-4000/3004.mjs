// 3004 - Maximum Subtree of the Same Color

function maximumSubtreeSize(edges, colors) {
    function dfs(node) {
        let size = 1;
        for (let i = 0; i < adj[node].length; i++) {
            const next = adj[node][i];
            if (seen[next]) continue;
            seen[next] = 1;
            size += dfs(next);
            if (colors[next] !== colors[node]) size = -100000;
        }
        max = Math.max(size, max);
        return size;
    }
    const adj = Array.from({ length: edges.length + 1 }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }
    const seen = new Uint8Array(adj.length);
    seen[0] = 1;
    let max = 1;
    dfs(0);
    return max;
}
