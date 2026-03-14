// 230 - Kth Smallest Element in a BST

function kthSmallest(root, k) {
    function dfs(node) {
        if (k <= 0) return;
        if (node.left) dfs(node.left);
        if (--k === 0) res = node.val;
        if (node.right) dfs(node.right);
    }
    let res;
    dfs(root);
    return res;
}
