// 133 - Clone Graph

function cloneGraph(node) {
    function dfs(node) {
        const cur = node.val;
        if (!arr[cur]) {
            arr[cur] = new Node(cur);
            arr[cur].neighbors = node.neighbors.map(dfs);
        }
        return arr[cur];
    }
    if (!node) return null;
    const arr = new Array(100);
    return dfs(node);
}
