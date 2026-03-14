// 951 - Flip Equivalent Binary Trees

function flipEquiv(root1, root2) {
    function dfs1(node) {
        if (!node) return;
        if (node.left && node.right) {
            if (node.left.val > node.right.val) {
                [node.left, node.right] = [node.right, node.left];
            }
        } else if (!node.left && node.right) {
            node.left = node.right;
            node.right = null;
        }
        dfs1(node.left);
        dfs1(node.right);
    }
    function dfs2(node, vals) {
        if (!node) return;
        dfs2(node.left, vals);
        vals.push(node.val);
        dfs2(node.right, vals);
    }
    if (root1 && !root2) return false;
    if (!root1 && root2) return false;
    if (!root1 && !root2) return true;
    const vals1 = [];
    dfs1(root1);
    dfs2(root1, vals1);
    const vals2 = [];
    dfs1(root2);
    dfs2(root2, vals2);
    for (let i = 0; i < vals1.length; i++) {
        if (vals1[i] !== vals2[i]) return false;
    }
    return true;
}
