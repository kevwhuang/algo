// 538 - Convert BST to Greater Tree

function convertBST(root) {
    function dfs(node) {
        node.right && dfs(node.right);
        sum += node.val;
        node.val = sum;
        node.left && dfs(node.left);
    }
    if (!root) return root;
    let sum = 0;
    dfs(root);
    return root;
}
