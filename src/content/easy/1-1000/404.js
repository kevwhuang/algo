// 404 - Sum of Left Leaves

function sumOfLeftLeaves(root) {
    function dfs(node) {
        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val;
        }
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
    }
    let sum = 0;
    dfs(root);
    return sum;
}
