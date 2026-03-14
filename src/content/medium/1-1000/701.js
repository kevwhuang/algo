// 701 - Insert Into a Binary Search Tree

function insertIntoBST(root, val) {
    if (!root) return new TreeNode(val);
    let node = root;
    while (true) {
        if (val < node.val) {
            if (!node.left) {
                node.left = new TreeNode(val);
                return root;
            }
            node = node.left;
        } else {
            if (!node.right) {
                node.right = new TreeNode(val);
                return root;
            }
            node = node.right;
        }
    }
}
