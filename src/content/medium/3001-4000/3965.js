// 3965. Finish Time of Tasks I

function finishTime(n, edges, baseTime) {
    function dfs(node) {
        const A = adj[node];
        if (!A) return baseTime[node];
        let min = Infinity, max = 0;
        for (let i = 0; i < A.length; i++) {
            const cur = dfs(A[i]);
            min = Math.min(cur, min);
            max = Math.max(cur, max);
        }
        return baseTime[node] + 2 * max - min;
    }
    const adj = {};
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        if (adj[u]) adj[u].push(v);
        else adj[u] = [v];
    }
    return dfs(0);
}
