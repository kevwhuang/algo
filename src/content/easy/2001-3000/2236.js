// 2236 - Root Equals Sum of Children

function checkTree(root) {
    return root.val === root.left.val + root.right.val;
}
