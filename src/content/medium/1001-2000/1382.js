// 1382 - Balance a Binary Search Tree

function balanceBST(root) {
    function dfs(node) {
        if (node.left) dfs(node.left);
        vals.push(node.val);
        if (node.right) dfs(node.right);
    }
    function construct(l, r) {
        if (l > r) return null;
        const m = (l + r) / 2 >> 0;
        const node = new TreeNode(vals[m]);
        node.left = construct(l, m - 1);
        node.right = construct(m + 1, r);
        return node;
    }
    const vals = [];
    dfs(root);
    return construct(0, vals.length - 1);
}
