// 222 - Count Complete Tree Nodes

function countNodes(root) {
    return root ? countNodes(root.left) + countNodes(root.right) + 1 : 0;
}
