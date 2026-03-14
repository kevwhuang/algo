// 669 - Trim a Binary Search Tree

function trimBST(root, low, high) {
    if (root.left) root.left = trimBST(root.left, low, high);
    if (root.right) root.right = trimBST(root.right, low, high);
    return root.val < low ? root.right : root.val > high ? root.left : root;
}
