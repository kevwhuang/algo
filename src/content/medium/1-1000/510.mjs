// 510 - Inorder Successor in BST II

function inorderSuccessor(node) {
    function dfs(node) {
        if (successor) return;
        if (node.left) dfs(node.left);
        if (node.val > target && !successor) successor = node;
        if (node.right) dfs(node.right);
    }
    const target = node.val;
    while (node.parent) node = node.parent;
    let successor = null;
    dfs(node);
    return successor;
}
