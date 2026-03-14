// 1666 - Change the Root of a Binary Tree

function flipBinaryTree(root, leaf) {
    function dfs(node, parent) {
        node.parent = parent;
        if (node.left) dfs(node.left, node);
        if (node.right) dfs(node.right, node);
    }
    let cur = leaf;
    while (cur.val !== root.val) {
        if (cur.left) cur.right = cur.left;
        cur.left = cur.parent;
        if (cur.parent.left === cur) cur.parent.left = null;
        else cur.parent.right = null;
        cur = cur.parent;
    }
    dfs(leaf, null);
    return leaf;
}
