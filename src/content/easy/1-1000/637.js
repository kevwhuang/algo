// 637 - Average of Levels in Binary Tree

function averageOfLevels(root) {
    const res = [];
    let queue = [root];
    while (queue.length) {
        const newQueue = [];
        let sum = 0;
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            sum += node.val;
            if (node.left) newQueue.push(node.left);
            if (node.right) newQueue.push(node.right);
        }
        res.push(sum / queue.length);
        queue = newQueue;
    }
    return res;
}
