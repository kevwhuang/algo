// 114 - Flatten Binary Tree to Linked List

function flatten(root) {
    function dfs(node) {
        cur.right = new TreeNode(node.val);
        cur = cur.right;
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
    }
    if (!root) return;
    const list = new TreeNode();
    let cur = list;
    dfs(root);
    root.left = null;
    root.right = list.right.right;
}
