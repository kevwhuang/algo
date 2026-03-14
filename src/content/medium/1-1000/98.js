// 98 - Validate Binary Search Tree

function isValidBST(root) {
    function dfs(node, min, max) {
        if (!node) return true;
        const cur = node.val;
        if (cur <= min || cur >= max) return false;
        return dfs(node.left, min, cur) && dfs(node.right, cur, max);
    }
    return dfs(root, -Infinity, Infinity);
}
