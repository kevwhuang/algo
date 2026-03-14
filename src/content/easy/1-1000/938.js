// 938 - Range Sum of BST

function rangeSumBST(root, low, high) {
    function dfs(cur) {
        cur.left && dfs(cur.left);
        cur.right && dfs(cur.right);
        if (low <= cur.val && cur.val <= high) sum += cur.val;
    }
    let sum = 0;
    dfs(root);
    return sum;
}
