// 742 - Closest Leaf in a Binary Tree

function findClosestLeaf(root, k) {
    function dfs(node) {
        if (node.left) node.left.parent = node;
        if (node.left) dfs(node.left);
        if (node.right) node.right.parent = node;
        if (node.right) dfs(node.right);
        if (node.val === k) k = node;
    }
    dfs(root);
    let queue = [k], seen = new WeakSet();
    while (true) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (seen.has(node)) continue;
            if (!node.left && !node.right) return node.val;
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
            if (!node.parent) continue;
            seen.add(node);
            nextQueue.push(node.parent);
        }
        queue = nextQueue;
    }
}
