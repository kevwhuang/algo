// 3831 - Median of a Binary Search Tree Level

function levelMedian(root, level) {
    let Q = [root];
    while (level--) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            if (Q[i].left) N.push(Q[i].left);
            if (Q[i].right) N.push(Q[i].right);
        }
        Q = N;
    }
    return Q.length ? Q[Q.length >> 1].val : -1;
}
