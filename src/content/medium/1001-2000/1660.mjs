// 1660 - Correct a Binary Tree

function correctBinaryTree(root) {
    let queue = new Set([root]);
    while (true) {
        const nextQueue = new Set();
        for (const node of queue) {
            if (node.right) {
                if (nextQueue.has(node.right.right)) {
                    node.right = null;
                    return root;
                }
                nextQueue.add(node.right);
            }
            if (node.left) {
                if (nextQueue.has(node.left.right)) {
                    node.left = null;
                    return root;
                }
                nextQueue.add(node.left);
            }
        }
        queue = nextQueue;
    }
}
