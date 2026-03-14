// 2192 - All Ancestors of a Node in a Directed Acyclic Graph

function getAncestors(n, edges) {
    function dfs(root, node) {
        const children = adj[node];
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const lastIndex = res[child].length - 1;
            if (lastIndex >= 0 && res[child][lastIndex] === root) continue;
            res[child].push(root);
            dfs(root, child);
        }
    }
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1]);
    }
    const res = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
        dfs(i, i);
    }
    return res;
}
