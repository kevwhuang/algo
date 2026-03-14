// 2196 - Create Binary Tree From Descriptions

function createBinaryTree(descriptions) {
    const nodes = new Map(), children = new Set();
    for (let i = 0; i < descriptions.length; i++) {
        const [parent, child] = descriptions[i];
        if (!nodes.has(parent)) nodes.set(parent, [null, null]);
        nodes.get(parent)[descriptions[i][2]] = child;
        children.add(child);
    }
    let root;
    for (const node of nodes.keys()) {
        if (children.has(node)) continue;
        root = new TreeNode(node);
        break;
    }
    let queue = [root];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0, len = queue.length; i < len; i++) {
            const node = queue[i];
            if (!nodes.has(node.val)) continue;
            const [right, left] = nodes.get(node.val);
            if (left) {
                node.left = new TreeNode(left);
                newQueue.push(node.left);
            }
            if (right) {
                node.right = new TreeNode(right);
                newQueue.push(node.right);
            }
        }
        queue = newQueue;
    }
    return root;
}
