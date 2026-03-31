// 3879. Maximum Distinct Path Sum in a Binary Tree

function maxSum(root) {
    function dfs1(node, prev) {
        node.prev = prev;
        if (node.left) dfs1(node.left, node);
        if (node.right) dfs1(node.right, node);
    }
    function dfs2(node) {
        dfs3(node, 0);
        if (node.left) dfs2(node.left);
        if (node.right) dfs2(node.right);
    }
    function dfs3(node, acc) {
        if (seen[node.val + 1000]) return;
        acc += node.val;
        res = Math.max(acc, res);
        seen[node.val + 1000] = 1;
        if (node.prev) dfs3(node.prev, acc);
        if (node.left) dfs3(node.left, acc);
        if (node.right) dfs3(node.right, acc);
        seen[node.val + 1000] = 0;
    }
    if (!this.seen) seen = new Uint8Array(2001);
    seen.fill();
    let res = -Infinity;
    dfs1(root);
    dfs2(root);
    return res;
}
