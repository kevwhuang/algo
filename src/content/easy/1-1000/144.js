// 144 - Binary Tree Preorder Traversal

function preorderTraversal(root) {
    function dfs(node) {
        if (!node) return;
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    const res = [];
    dfs(root);
    return res;
}
