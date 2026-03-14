// 1676 - Lowest Common Ancestor of a Binary Tree IV

function lowestCommonAncestor(root, nodes) {
    if (!root || nodes.includes(root)) return root;
    const left = lowestCommonAncestor(root.left, nodes);
    const right = lowestCommonAncestor(root.right, nodes);
    return left && right ? root : left || right;
}
