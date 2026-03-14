// 112 - Path Sum

function hasPathSum(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) return root.val === targetSum;
    const left = hasPathSum(root.left, targetSum - root.val);
    const right = hasPathSum(root.right, targetSum - root.val);
    return left || right;
}
