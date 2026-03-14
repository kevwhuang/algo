// 2458 - Height of Binary Tree After Subtree Removal Queries

function treeQueries(root, queries) {
    function dfs(node) {
        let max = 0;
        if (node.left) max = Math.max(dfs(node.left) + 1, max);
        if (node.right) max = Math.max(dfs(node.right) + 1, max);
        return A[node.val] = max;
    }
    if (!this.A) A = new Array(100000);
    dfs(root);
    const k = A[root.val];
    let Q = [root];
    while (Q.length) {
        const N = [];
        let a = -1, b = -1;
        for (let i = 0; i < Q.length; i++) {
            const node = Q[i], cur = A[node.val];
            if (cur > a) b = a, a = cur;
            else if (cur > b) b = cur;
            if (node.left) N.push(node.left);
            if (node.right) N.push(node.right);
        }
        for (let i = 0; i < Q.length; i++) {
            A[Q[i].val] = A[Q[i].val] < a ? k : k + b - a;
        }
        Q = N;
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i] = A[queries[i]];
    }
    return queries;
}
