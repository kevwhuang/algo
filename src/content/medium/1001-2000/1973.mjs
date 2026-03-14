// 1973 - Count Nodes Equal to Sum of Descendants

function equalToDescendants(root) {
    function dfs(node) {
        if (!node) return 0;
        const sum = dfs(node.left) + dfs(node.right);
        if (sum === node.val) nodes++;
        return sum + node.val;
    }
    let nodes = 0;
    dfs(root);
    return nodes;
}
