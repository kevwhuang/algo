// 1339 - Maximum Product of Splitted Binary Tree

function maxProduct(root) {
    function dfs1(node) {
        sum += node.val;
        if (node.left) dfs1(node.left);
        if (node.right) dfs1(node.right);
    }
    function dfs2(node) {
        if (!node) return 0;
        const sub = node.val + dfs2(node.left) + dfs2(node.right);
        max = Math.max(sub * (sum - sub), max);
        return sub;
    }
    let sum = 0;
    dfs1(root);
    let max = 1;
    dfs2(root);
    return max % 1000000007;
}
