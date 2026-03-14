// 1026 - Maximum Difference Between Node and Ancestor

function maxAncestorDiff(root) {
    function dfs(node, min, max) {
        if (!node) return;
        res = Math.max(Math.abs(node.val - min), Math.abs(node.val - max), res);
        dfs(node.left, Math.min(node.val, min), Math.max(node.val, max));
        dfs(node.right, Math.min(node.val, min), Math.max(node.val, max));
    }
    let res = 0;
    dfs(root, root.val, root.val);
    return res;
}
