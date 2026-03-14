// 543 - Diameter of Binary Tree

function diameterOfBinaryTree(root) {
    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        res = Math.max(left + right, res);
        return Math.max(left, right) + 1;
    }
    let res = 0;
    dfs(root);
    return res;
}
