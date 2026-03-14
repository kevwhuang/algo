// 687 - Longest Univalue Path

function longestUnivaluePath(root) {
    function dfs(node, prev) {
        if (!node) return 0;
        const left = dfs(node.left, node.val);
        const right = dfs(node.right, node.val);
        max = Math.max(left + right, max);
        return node.val === prev ? Math.max(left, right) + 1 : 0;
    }
    let max = 0;
    dfs(root);
    return max;
}
