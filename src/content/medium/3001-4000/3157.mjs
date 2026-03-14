// 3157 - Find the Level of Tree With Minimum Sum

function minimumLevel(root) {
    let min, minSum = Infinity, level = 1, queue = [root];
    while (queue.length) {
        const nextQueue = [];
        let sum = 0;
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            sum += node.val;
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
        }
        if (sum < minSum) min = level, minSum = sum;
        level++, queue = nextQueue;
    }
    return min;
}
