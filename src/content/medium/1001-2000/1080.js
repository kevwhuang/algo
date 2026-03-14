// 1080 - Insufficient Nodes in Root to Leaf Paths

function sufficientSubset(root, limit) {
    function dfs(root, limit) {
        if (!root) return null;
        if (!root.left && !root.right) {
            return root.val < limit ? null : root;
        }
        root.left = dfs(root.left, limit - root.val);
        root.right = dfs(root.right, limit - root.val);
        return root.left || root.right ? root : null;
    }
    return dfs(root, limit);
}
