// 3997. Count Dominant Nodes in a Binary Tree

function countDominantNodes(root) {
    function dfs(node) {
        const left = node.left ? dfs(node.left) : 0;
        const right = node.right ? dfs(node.right) : 0;
        const max = Math.max(node.val, left, right);
        if (node.val === max) res++;
        return max;
    }
    let res = 0;
    dfs(root);
    return res;
}
