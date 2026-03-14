// 655 - Print Binary Tree

function printTree(root) {
    function dfs1(node, r) {
        height = Math.max(r, height);
        if (node.left) dfs1(node.left, r + 1);
        if (node.right) dfs1(node.right, r + 1);
    }
    function dfs2(node, r, c) {
        tree[r][c] = String(node.val);
        if (node.left) dfs2(node.left, r + 1, c - 2 ** (height - r - 1));
        if (node.right) dfs2(node.right, r + 1, c + 2 ** (height - r - 1));
    }
    let height = 0;
    dfs1(root, 0);
    const m = height + 1, n = 2 ** (height + 1) - 1;
    const tree = Array.from({ length: m }, () => new Array(n).fill(''));
    dfs2(root, 0, (n - 1) / 2);
    return tree;
}
