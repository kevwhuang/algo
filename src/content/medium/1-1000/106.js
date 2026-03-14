// 106 - Construct Binary Tree From Inorder and Postorder Traversal

function buildTree(inorder, postorder) {
    function build(l, r) {
        if (l > r) return null;
        const root = new TreeNode(postorder.pop());
        const index = map.get(root.val);
        root.right = build(index + 1, r);
        root.left = build(l, index - 1);
        return root;
    }
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    return build(0, inorder.length - 1);
}
