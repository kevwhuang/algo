// 1430 - Check If a String Is a Valid Sequence From Root to Leaves Path in a Binary Tree

function isValidSequence(root, arr) {
    if (!root) return false;
    let queue = [root], i = 0;
    while (queue.length && i < arr.length) {
        const nextQueue = [];
        for (let j = 0; j < queue.length; j++) {
            const node = queue[j];
            if (node.val !== arr[i]) continue;
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
            else if (!node.left && i === arr.length - 1) return true;
        }
        queue = nextQueue;
        i++;
    }
    return false;
}
