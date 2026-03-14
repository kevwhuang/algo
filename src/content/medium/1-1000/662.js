// 662 - Maximum Width of Binary Tree

function widthOfBinaryTree(root) {
    let max = 0, queue = [[root, 0]];
    while (true) {
        const nextQueue = [];
        const offset = queue[0][1];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i][0], pos = 2 * queue[i][1] - offset;
            if (node.left) nextQueue.push([node.left, pos]);
            if (node.right) nextQueue.push([node.right, pos + 1]);
        }
        if (nextQueue.length === 0) break;
        const tail = nextQueue[nextQueue.length - 1][1];
        max = Math.max(Number(tail - nextQueue[0][1]), max);
        queue = nextQueue;
    }
    return max + 1;
}
