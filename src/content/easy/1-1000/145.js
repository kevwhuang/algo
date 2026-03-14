// 145 - Binary Tree Postorder Traversal

function postorderTraversal(root) {
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        res.push(node.val);
    }
    const res = [];
    dfs(root);
    return res;
}
