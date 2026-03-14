// 1315 - Sum of Nodes With Even-Valued Grandparent

function sumEvenGrandparent(root) {
    function dfs(node, parent, grandparent) {
        if (grandparent % 2 === 0) sum += node.val;
        node.left && dfs(node.left, node.val, parent);
        node.right && dfs(node.right, node.val, parent);
    }
    let sum = 0;
    dfs(root);
    return sum;
}
