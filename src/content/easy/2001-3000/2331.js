// 2331 - Evaluate Boolean Binary Tree

function evaluateTree(root) {
    if (!root || !root.val) return false;
    if (root.val === 1) return true;
    const left = evaluateTree(root.left);
    const right = evaluateTree(root.right);
    return root.val === 2 ? left || right : left && right;
}
