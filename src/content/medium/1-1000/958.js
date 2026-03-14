// 958 - Check Completeness of a Binary Tree

function isCompleteTree(root) {
    let seenNull = false;
    let queue = [root];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (node) {
                if (seenNull) return false;
                newQueue.push(node.left);
                newQueue.push(node.right);
            } else {
                seenNull = true;
            }
        }
        queue = newQueue;
    }
    return true;
}
