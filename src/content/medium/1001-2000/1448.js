// 1448 - Count Good Nodes in Binary Tree

function goodNodes(root) {
    function dfs(node, max) {
        max = Math.max(node.val, max);
        if (node.val >= max) res++;
        if (node.left) dfs(node.left, max);
        if (node.right) dfs(node.right, max);
    }
    let res = 0;
    dfs(root, root.val);
    return res;
}
