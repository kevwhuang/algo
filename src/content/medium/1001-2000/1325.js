// 1325 - Delete Leaves With a Given Value

function removeLeafNodes(root, target) {
    if (root.left) root.left = removeLeafNodes(root.left, target);
    if (root.right) root.right = removeLeafNodes(root.right, target);
    return !root.left && !root.right && root.val === target ? null : root;
}
