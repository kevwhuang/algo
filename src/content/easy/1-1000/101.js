// 101 - Symmetric Tree

function isSymmetric(root) {
    function dfs(t1, t2) {
        if (!t1 && !t2) return true;
        if (!t1 || !t2 || t1.val !== t2.val) return false;
        return dfs(t1.left, t2.right) && dfs(t1.right, t2.left);
    }
    return dfs(root.left, root.right);
}
