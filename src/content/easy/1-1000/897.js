// 897 - Increasing Order Search Tree

function increasingBST(root) {
    function dfs(cur) {
        if (!cur) return;
        dfs(cur.left);
        cur.left = null;
        node.right = cur;
        node = node.right;
        dfs(cur.right);
    }
    const tree = new TreeNode();
    let node = tree;
    dfs(root);
    return tree.right;
}
