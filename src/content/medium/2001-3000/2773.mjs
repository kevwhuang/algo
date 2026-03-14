// 2773 - Height of Special Binary Tree

function heightOfTree(root) {
    if (!root || !root.left && !root.right) return 0;
    if (root.left && root.left.right === root) return 0;
    return 1 + Math.max(heightOfTree(root.left), heightOfTree(root.right));
}
