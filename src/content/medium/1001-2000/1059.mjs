// 1059 - All Paths From Source Lead to Destination

function leadsToDestination(n, edges, source, destination) {
    function dfs(node) {
        if (seen.has(node)) return true;
        if (!adj[node].length) return node === destination;
        if (state[node]) return false;
        state[node] = 1;
        for (const v of adj[node]) {
            if (!dfs(v)) return false;
        }
        state[node] = 0;
        seen.add(node);
        return true;
    }
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        if (edges[i][0] === destination) return false;
        adj[edges[i][0]].push(edges[i][1]);
    }
    const seen = new Set();
    const state = new Uint8Array(n);
    return dfs(source);
}
