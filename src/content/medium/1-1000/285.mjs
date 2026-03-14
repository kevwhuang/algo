// 285 - Inorder Successor in BST

function inorderSuccessor(root, p) {
    function dfs(node) {
        if (!node || res) return;
        node.left && dfs(node.left);
        if (!res && node.val > p.val) res = node;
        node.right && dfs(node.right);
    }
    let res = null;
    dfs(root);
    return res;
}
