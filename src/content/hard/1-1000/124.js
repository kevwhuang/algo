// 124 - Binary Tree Maximum Path Sum

function maxPathSum(root) {
    function dfs(node) {
        if (!node) return 0;
        const cur = node.val;
        const left = dfs(node.left) + cur;
        const right = dfs(node.right) + cur;
        const max = Math.max(cur, left, right);
        res = Math.max(left + right - cur, max, res);
        return max;
    }
    let res = -Infinity;
    dfs(root);
    return res;
}
