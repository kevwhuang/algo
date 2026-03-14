// 429 - N-Ary Tree Level Order Traversal

function levelOrder(root) {
    if (!root) return [];
    const res = [];
    let queue = [root];
    while (queue.length) {
        const level = [], newQueue = [];
        for (let i = 0, len = queue.length; i < len; i++) {
            const node = queue[i];
            level.push(node.val);
            for (let j = 0; j < node.children.length; j++) {
                if (!node.children[j]) continue;
                newQueue.push(node.children[j]);
            }
        }
        res.push(level);
        queue = newQueue;
    }
    return res;
}
