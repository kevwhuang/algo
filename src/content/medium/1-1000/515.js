// 515 - Find Largest Value in Each Tree Row

function largestValues(root) {
    function dfs(node, h) {
        if (!node) return;
        if (h === res.length) res[h] = -Infinity;
        res[h] = Math.max(node.val, res[h]);
        dfs(node.left, h + 1);
        dfs(node.right, h + 1);
    }
    const res = [];
    dfs(root, 0);
    return res;
}
