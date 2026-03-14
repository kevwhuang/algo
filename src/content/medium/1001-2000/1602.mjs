// 1602 - Find Nearest Right Node in Binary Tree

function findNearestRightNode(root, u) {
    let queue = [root];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0, len = queue.length; i < len; i++) {
            const node = queue[i];
            if (node === u) return i === len - 1 ? null : queue[i + 1];
            if (node.left) newQueue.push(node.left);
            if (node.right) newQueue.push(node.right);
        }
        queue = newQueue;
    }
}
