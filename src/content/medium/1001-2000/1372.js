// 1372 - Longest Zigzag Path in a Binary Tree

function longestZigZag(root) {
    function dfs(node, left, depth) {
        if (!node) return;
        max = Math.max(depth, max);
        if (left) {
            dfs(node.left, true, 1);
            dfs(node.right, false, depth + 1);
        } else {
            dfs(node.left, true, depth + 1);
            dfs(node.right, false, 1);
        }
    }
    let max = 0;
    dfs(root.left, true, 1);
    dfs(root.right, false, 1);
    return max;
}
