// 3902. Zigzag Level Sum of Binary Tree

function zigzagLevelSum(root) {
    const res = [];
    let Q = [root];
    while (Q.length) {
        const N = [];
        let acc = 0, left, right = 0;
        for (let i = 0; i < Q.length; i++) {
            const node = Q[i];
            acc += node.val;
            if (node.left) N.push(node.left);
            else left ??= acc - node.val;
            if (node.right) N.push(node.right);
            else right = acc;
        }
        res.push(res.length % 2 ? acc - right : left ?? acc);
        Q = N;
    }
    return res;
}
