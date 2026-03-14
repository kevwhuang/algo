// 572 - Subtree of Another Tree

function isSubtree(root, subRoot) {
    function dfs(p, q) {
        if (!p && !q) return true;
        if (!p || !q || p.val !== q.val) return false;
        return dfs(p.left, q.left) && dfs(p.right, q.right);
    }
    if (!root) return false;
    if (dfs(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
