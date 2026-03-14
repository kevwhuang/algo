// 1273 - Delete Tree Nodes

function deleteTreeNodes(nodes, parent, value) {
    function dfs1(node) {
        let sum = value[node];
        const children = adj[node];
        for (let i = 0; i < children?.length; i++) {
            sum += dfs1(children[i]);
        }
        if (sum === 0) set.add(node);
        return sum;
    }
    function dfs2(node) {
        if (set.has(node)) return;
        count++;
        const children = adj[node];
        for (let i = 0; i < children?.length; i++) {
            dfs2(children[i]);
        }
    }
    const adj = { 0: [] };
    for (let n = 1; n < parent.length; n++) {
        adj[parent[n]] ??= [];
        adj[parent[n]].push(n);
    }
    const set = new Set();
    dfs1(0);
    let count = 0;
    dfs2(0);
    return count;
}
