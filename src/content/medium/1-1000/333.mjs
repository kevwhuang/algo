// 333 - Largest BST Subtree

function largestBSTSubtree(root) {
    function dfs1(node, min, max) {
        if (!node) return true;
        if (node.val <= min) return false;
        if (node.val >= max) return false;
        const left = dfs1(node.left, min, node.val);
        const right = dfs1(node.right, node.val, max);
        return left && right;
    }
    function dfs2(node) {
        if (!node) return 0;
        return dfs2(node.left) + dfs2(node.right) + 1;
    }
    if (dfs1(root, -Infinity, Infinity)) return dfs2(root);
    const left = largestBSTSubtree(root.left);
    const right = largestBSTSubtree(root.right);
    return Math.max(left, right);
}
