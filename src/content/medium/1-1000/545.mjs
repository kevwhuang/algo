// 545 - Boundary of Binary Tree

function boundaryOfBinaryTree(root) {
    function dfsLeft(node) {
        if (!node || !node.left && !node.right) return;
        boundary.push(node.val);
        dfsLeft(node.left ?? node.right);
    }
    function dfsLeaves(node) {
        if (!node) return;
        if (!node.left && !node.right) return boundary.push(node.val);
        dfsLeaves(node.left);
        dfsLeaves(node.right);
    }
    function dfsRight(node) {
        if (!node || !node.left && !node.right) return;
        dfsRight(node.right ?? node.left);
        boundary.push(node.val);
    }
    const boundary = [root.val];
    dfsLeft(root.left);
    if (root.left || root.right) dfsLeaves(root);
    dfsRight(root.right);
    return boundary;
}
