// 111 - Minimum Depth of Binary Tree

function minDepth(root) {
    if (!root) return 0;
    let depth = 0, Q = [root];
    while (++depth) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const node = Q[i];
            if (!node.left && !node.right) return depth;
            if (node.left) N.push(node.left);
            if (node.right) N.push(node.right);
        }
        Q = N;
    }
}
