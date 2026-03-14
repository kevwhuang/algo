// 99 - Recover Binary Search Tree

function recoverTree(root) {
    function dfs1(node) {
        if (node.left) dfs1(node.left);
        vals.push(node.val);
        if (node.right) dfs1(node.right);
    }
    function dfs2(node) {
        if (node.left) dfs2(node.left);
        node.val = vals[i++];
        if (node.right) dfs2(node.right);
    }
    const vals = [];
    dfs1(root);
    vals.sort((a, b) => a - b);
    let i = 0;
    dfs2(root);
}
