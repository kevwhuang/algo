// 530 - Minimum Absolute Difference in BST

function getMinimumDifference(root) {
    function dfs(cur) {
        cur.left && dfs(cur.left);
        min = Math.min(cur.val - prev, min);
        prev = cur.val;
        cur.right && dfs(cur.right);
    }
    let min = Infinity, prev = -Infinity;
    dfs(root);
    return min;
}
