// 1302 - Deepest Leaves Sum

function deepestLeavesSum(root) {
    const queue = [root];
    let sum;
    while (queue.length) {
        sum = 0;
        const len = queue.length;
        for (let i = 0, node; i < len; i++) {
            node = queue.shift();
            sum += node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return sum;
}
