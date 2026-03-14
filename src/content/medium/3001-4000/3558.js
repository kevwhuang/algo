// 3558 - Number of Ways to Assign Edge Weights I

function assignEdgeWeights(edges) {
    function dfs(node, prev, acc) {
        let max = acc;
        const arr = adj[node];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === prev) continue;
            max = Math.max(dfs(arr[i], node, acc + 1), max);
        }
        return max;
    }
    const adj = Array.from({ length: edges.length + 2 }, () => []);
    edges.forEach(e => adj[e[0]].push(e[1]) && adj[e[1]].push(e[0]));
    return Number(2n ** BigInt(dfs(1, -1, -1)) % 1000000007n);
}
