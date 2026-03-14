// 513 - Find Bottom Left Tree Value

function findBottomLeftValue(root) {
    let Q = [root];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const node = Q[i];
            if (node.left) N.push(node.left);
            if (node.right) N.push(node.right);
        }
        if (N.length === 0) return Q[0].val;
        Q = N;
    }
}
