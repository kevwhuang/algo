// 965 - Univalued Binary Tree

function isUnivalTree(root, ref = root.val) {
    if (!root) return true;
    if (root.val !== ref) return false;
    return isUnivalTree(root.left, ref) && isUnivalTree(root.right, ref);
}
