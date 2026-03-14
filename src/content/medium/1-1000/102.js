// 102 - Binary Tree Level Order Traversal

function levelOrder(root) {
    if (!root) return [];
    const res = [];
    let Q = [root];
    while (Q.length) {
        const arr = new Int16Array(Q.length), N = [];
        for (let i = 0; i < Q.length; i++) {
            const node = Q[i];
            arr[i] = node.val;
            if (node.left) N.push(node.left);
            if (node.right) N.push(node.right);
        }
        res.push(arr);
        Q = N;
    }
    return res;
}
