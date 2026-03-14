// 2415 - Reverse Odd Levels of Binary Tree

function reverseOddLevels(root) {
    let level = 0, queue = [root];
    while (queue.length) {
        if (level++ % 2) {
            let l = -1, r = queue.length;
            while (++l < --r) {
                [queue[l].val, queue[r].val] = [queue[r].val, queue[l].val];
            }
        }
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].left) nextQueue.push(queue[i].left);
            if (queue[i].right) nextQueue.push(queue[i].right);
        }
        queue = nextQueue;
    }
    return root;
}
