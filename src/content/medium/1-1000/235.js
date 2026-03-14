// 235 - Lowest Common Ancestor of a Binary Search Tree

function lowestCommonAncestor(root, p, q) {
    while (true) {
        const cur = root.val;
        if (cur > p.val && cur > q.val) root = root.left;
        else if (cur < p.val && cur < q.val) root = root.right;
        else return root;
    }
}
