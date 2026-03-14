// 2641 - Cousins in Binary Tree II

function replaceValueInTree(root) {
    let sum = root.left ? root.left.val : 0;
    sum += root.right ? root.right.val : 0;
    let queue = [[root, sum]];
    while (queue.length) {
        const nextQueue = [], cur = sum;
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i][0], sub = queue[i][1];
            node.val = cur - sub;
            let next = node.left ? node.left.val : 0;
            next += node.right ? node.right.val : 0;
            sum += next;
            if (node.left) nextQueue.push([node.left, next]);
            if (node.right) nextQueue.push([node.right, next]);
        }
        sum -= cur, queue = nextQueue;
    }
    return root;
}
