// 671 - Second Minimum Node in a Binary Tree

function findSecondMinimumValue(root) {
    let res = Infinity, Q = [root];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const node = Q[i];
            if (node.val !== root.val) res = Math.min(node.val, res);
            if (node.left && node.left.val < res) N.push(node.left);
            if (node.right && node.right.val < res) N.push(node.right);
        }
        Q = N;
    }
    return res === Infinity ? -1 : res;
}
