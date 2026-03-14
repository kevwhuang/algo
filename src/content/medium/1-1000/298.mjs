// 298 - Binary Tree Longest Consecutive Sequence

function longestConsecutive(root) {
    function dfs(node, target, len) {
        if (!node) return;
        if (node.val === target) len++;
        else len = 1;
        max = Math.max(len, max);
        dfs(node.left, node.val + 1, len);
        dfs(node.right, node.val + 1, len);
    }
    let max = 1;
    dfs(root, root.val, 0);
    return max;
}
