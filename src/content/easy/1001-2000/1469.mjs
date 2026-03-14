// 1469 - Find All the Lonely Nodes

function getLonelyNodes(root) {
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        if (node.left && !node.right) res.push(node.left.val);
        if (node.right && !node.left) res.push(node.right.val);
    }
    const res = [];
    dfs(root);
    return res;
}
