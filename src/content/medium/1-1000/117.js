// 117 - Populating Next Right Pointers in Each Node II

function connect(root) {
    if (!root) return null;
    let queue = [root];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0, len = queue.length; i < len; i++) {
            const node = queue[i];
            node.next = i + 1 < len ? queue[i + 1] : null;
            node.left && newQueue.push(node.left);
            node.right && newQueue.push(node.right);
        }
        queue = newQueue;
    }
    return root;
}
