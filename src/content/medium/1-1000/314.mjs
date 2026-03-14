// 314 - Binary Tree Vertical Order Traversal

function verticalOrder(root) {
    if (!root) return [];
    const map = new Map();
    let queue = [[root, 0]];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i][0], col = queue[i][1];
            if (!map.has(col)) map.set(col, []);
            map.get(col).push(node.val);
            if (node.left) nextQueue.push([node.left, col - 1]);
            if (node.right) nextQueue.push([node.right, col + 1]);
        }
        queue = nextQueue;
    }
    return Array.from(map).sort((a, b) => a[0] - b[0]).map(e => e[1]);
}
