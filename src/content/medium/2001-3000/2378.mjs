// 2378 - Choose Edges to Maximize Score in a Tree

function maxScore(edges) {
    function dfs(node) {
        let max = 0, sum = 0;
        const next = adj[node];
        for (let i = 0; i < next.length; i++) {
            const res = dfs(next[i][0]);
            max = Math.max(next[i][1] - res[0], max);
            sum += res[0] + res[1];
        }
        return [max, sum];
    }
    const adj = Array.from({ length: edges.length }, () => []);
    for (let i = 1; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i]);
        edges[i][0] = i;
    }
    return dfs(0).reduce((s, e) => s + e);
}
