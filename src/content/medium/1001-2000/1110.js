// 1110 - Delete Nodes and Return Forest

function delNodes(root, to_delete) {
    function dfs(node, isRoot) {
        if (!node) return null;
        const deleted = set.has(node.val);
        if (isRoot && !deleted) forest.push(node);
        node.left = dfs(node.left, deleted);
        node.right = dfs(node.right, deleted);
        return deleted ? null : node;
    }
    const forest = [];
    const set = new Set(to_delete);
    dfs(root, true);
    return forest;
}
