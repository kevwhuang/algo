// 103 - Binary Tree Zigzag Level Order Traversal

function zigzagLevelOrder(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    let forwards = true;
    while (queue.length) {
        const level = new Array(queue.length);
        for (let i = 0, len = queue.length; i < len; i++) {
            const node = queue.shift();
            level[forwards ? i : len - i - 1] = node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(level);
        forwards = !forwards;
    }
    return res;
}
