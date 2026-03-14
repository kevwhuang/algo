// 1644 - Lowest Common Ancestor of a Binary Tree II

function lowestCommonAncestor(root, p, q) {
    if (!p || !q) return null;
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    return left && right ? root : left || right;
}
