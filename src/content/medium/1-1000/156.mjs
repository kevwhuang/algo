// 156 - Binary Tree Upside Down

function upsideDownBinaryTree(root) {
    if (!root || !root.left) return root;
    const newRoot = upsideDownBinaryTree(root.left);
    root.left.left = root.right;
    root.left.right = root;
    root.left = root.right = null;
    return newRoot;
}
