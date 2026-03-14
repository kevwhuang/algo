// 1519 - Number of Nodes in the Subtree With the Same Label

function countSubTrees(n, edges, labels) {
    function dfs(node, parent) {
        const code = labels.charCodeAt(node) - 97;
        res[node] -= bucket[code]++;
        const neighbors = adj[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (neighbors[i] === parent) continue;
            dfs(neighbors[i], node);
        }
        res[node] += bucket[code];
    }
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }
    const res = new Uint32Array(n);
    const bucket = new Array(26).fill(0);
    dfs(0);
    return res;
}
