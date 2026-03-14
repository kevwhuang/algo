// 250 - Count Univalue Subtrees

function countUnivalSubtrees(root) {
    function dfs(node) {
        if (!node) return true;
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (!left || !right) return false;
        if (node.left && node.val !== node.left.val) return false;
        if (node.right && node.val !== node.right.val) return false;
        return ++count;
    }
    let count = 0;
    dfs(root);
    return count;
}
