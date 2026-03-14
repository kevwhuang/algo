// 623 - Add One Row to Tree

function addOneRow(root, val, depth) {
    if (depth === 1) return new TreeNode(val, root);
    let queue = [root];
    while (queue.length && --depth) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (depth === 1) {
                node.left = new TreeNode(val, node.left);
                node.right = new TreeNode(val, null, node.right);
            } else {
                node.left && newQueue.push(node.left);
                node.right && newQueue.push(node.right);
            }
        }
        queue = newQueue;
    }
    return root;
}
