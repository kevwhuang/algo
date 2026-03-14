// 94 - Binary Tree Inorder Traversal

function inorderTraversal(root) {
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        res.push(node.val);
        dfs(node.right);
    }
    const res = [];
    dfs(root);
    return res;
}
