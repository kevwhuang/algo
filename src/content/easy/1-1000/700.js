// 700 - Search in a Binary Search Tree

function searchBST(root, val) {
    while (root) {
        if (val < root.val) root = root.left;
        else if (val > root.val) root = root.right;
        else return root;
    }
    return null;
}
