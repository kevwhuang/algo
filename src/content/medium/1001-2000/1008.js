// 1008 - Construct Binary Search Tree From Preorder Traversal

function bstFromPreorder(preorder) {
    function insert(val) {
        let node = tree;
        while (true) {
            if (val < node.val) {
                if (!node.left) return node.left = new TreeNode(val);
                node = node.left;
            } else if (val > node.val) {
                if (!node.right) return node.right = new TreeNode(val);
                node = node.right;
            }
        }
    }
    const tree = new TreeNode(preorder[0]);
    for (let i = 1; i < preorder.length; i++) {
        insert(preorder[i]);
    }
    return tree;
}
