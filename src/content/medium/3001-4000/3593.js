// 3593 - Minimum Increments to Equalize Leaf Paths

function minIncrease(n, edges, cost) {
    function dfs(node, prev) {
        const arr1 = adj[node], arr2 = [];
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== prev) arr2.push(dfs(arr1[i], node));
        }
        const max = arr2.reduce((s, e) => Math.max(e, s), 0);
        arr2.forEach(e => e < max && res++);
        return max + cost[node];
    }
    const adj = Array.from({ length: n }, () => []);
    edges.forEach(e => adj[e[0]].push(e[1]) && adj[e[1]].push(e[0]));
    let res = 0;
    dfs(0);
    return res;
}
