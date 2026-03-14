// 366 - Find Leaves of Binary Tree

function findLeaves(root) {
    function dfs(node) {
        if (!node) return null;
        if (!node.left && !node.right) {
            level.push(node.val);
            return null;
        }
        node.left = dfs(node.left);
        node.right = dfs(node.right);
        return node;
    }
    const leaves = [];
    let level;
    while (root) {
        level = [];
        root = dfs(root);
        leaves.push(level);
    }
    return leaves;
}
