// 107 - Binary Tree Level Order Traversal II

function levelOrderBottom(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    while (queue.length) {
        const level = new Array(queue.length);
        for (let i = 0, len = queue.length; i < len; i++) {
            const node = queue.shift();
            level[i] = node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(level);
    }
    return res.reverse();
}
