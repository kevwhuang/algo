// 1038 - Binary Search Tree to Greater Sum Tree

function bstToGst(root) {
    function dfs(node) {
        node.right && dfs(node.right);
        sum += node.val;
        node.val = sum;
        node.left && dfs(node.left);
    }
    let sum = 0;
    dfs(root);
    return root;
}
