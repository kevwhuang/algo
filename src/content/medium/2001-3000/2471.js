// 2471 - Minimum Number of Operations to Sort a Binary Tree by Level

function minimumOperations(root) {
    let res = 0, Q = [root];
    while (Q.length) {
        const n = Q.length, M = new Array(n), N = [];
        for (let i = 0; i < n; i++) {
            const node = Q[i];
            M[i] = [node.val, i];
            if (node.left) N.push(node.left);
            if (node.right) N.push(node.right);
        }
        M.sort((a, b) => a[0] - b[0]);
        let i = 0;
        while (i < n) {
            const j = M[i][1];
            if (j === i && ++i) continue;
            const cur = M[j], k = M[j][1];
            res++, M[j] = M[k], M[k] = cur;
        }
        Q = N;
    }
    return res;
}
