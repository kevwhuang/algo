// 2476 - Closest Nodes Queries in a Binary Search Tree

function closestNodes(root, queries) {
    function dfs(node) {
        if (node.left) dfs(node.left);
        vals.push(node.val);
        if (node.right) dfs(node.right);
    }
    const vals = [];
    dfs(root);
    for (let i = 0; i < queries.length; i++) {
        const target = queries[i];
        let min = -1, max = -1;
        let l = 0, r = vals.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (vals[m] < target) {
                min = vals[m];
                l = m + 1;
            } else if (vals[m] > target) {
                max = vals[m];
                r = m - 1;
            } else {
                min = max = target;
                break;
            }
        }
        queries[i] = [min, max];
    }
    return queries;
}
