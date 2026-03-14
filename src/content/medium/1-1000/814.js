// 814 - Binary Tree Pruning

function pruneTree(root) {
    if (root.left) root.left = pruneTree(root.left);
    if (root.right) root.right = pruneTree(root.right);
    return root.left || root.right || root.val ? root : null;
}
