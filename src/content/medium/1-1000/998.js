// 998 - Maximum Binary Tree II

function insertIntoMaxTree(root, val) {
    if (root && root.val > val) {
        root.right = insertIntoMaxTree(root.right, val);
        return root;
    }
    return new TreeNode(val, root);
}
