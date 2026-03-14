// 1022 - Sum of Root to Leaf Binary Numbers

function sumRootToLeaf(root) {
    function dfs(node, prev) {
        prev = prev << 1 | node.val;
        if (!node.left && !node.right) sum += parseInt(prev, 10);
        if (node.left) dfs(node.left, prev);
        if (node.right) dfs(node.right, prev);
    }
    let sum = 0;
    dfs(root);
    return sum;
}
