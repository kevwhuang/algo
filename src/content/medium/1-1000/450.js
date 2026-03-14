// 450 - Delete Node in a BST

function deleteNode(root, key) {
    if (!root) return null;
    if (root.val < key) root.right = deleteNode(root.right, key);
    else if (root.val > key) root.left = deleteNode(root.left, key);
    else {
        if (!root.left) return root.right;
        else if (!root.right) return root.left;
        let node = root.right;
        while (node.left) node = node.left;
        node.left = root.left;
        return root.right;
    }
    return root;
}
