// 971 - Flip Binary Tree to Match Preorder Traversal

function flipMatchVoyage(root, voyage) {
    function dfs(node) {
        if (i === -1) return;
        if (node.val !== voyage[i++]) return i = -1;
        if (!node.left || node.left.val === voyage[i]) {
            if (node.left) dfs(node.left);
            if (node.right) dfs(node.right);
        } else {
            res.push(node.val);
            if (node.right) dfs(node.right);
            dfs(node.left);
        }
    }
    const res = [];
    let i = 0;
    dfs(root);
    return i === -1 ? [i] : res;
}
