// 1161 - Maximum Level Sum of a Binary Tree

function maxLevelSum(root) {
    let level = 1, minLevel = 1, maxSum = -Infinity;
    let queue = [root];
    while (queue.length) {
        const newQueue = [];
        let sum = 0;
        for (let i = 0, len = queue.length; i < len; i++) {
            const node = queue[i];
            sum += node.val;
            if (node.left) newQueue.push(node.left);
            if (node.right) newQueue.push(node.right);
        }
        if (sum > maxSum) {
            minLevel = level;
            maxSum = sum;
        }
        level++;
        queue = newQueue;
    }
    return minLevel;
}
