// 2583 - Kth Largest Sum in a Binary Tree

function kthLargestLevelSum(root, k) {
    const heap = new PriorityQueue({ compare: (a, b) => b - a });
    let queue = [root];
    while (queue.length) {
        const nextQueue = [];
        let acc = 0;
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            acc += node.val;
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
        }
        heap.enqueue(acc);
        queue = nextQueue;
    }
    if (k > heap.size()) return -1;
    while (--k) heap.dequeue();
    return heap.dequeue();
}
