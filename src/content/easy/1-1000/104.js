// 104 - Maximum Depth of Binary Tree

function maxDepth(root) {
    return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
}
