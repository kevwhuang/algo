// 1145 - Binary Tree Coloring Game

function btreeGameWinningMove(root, n, x) {
    function dfs1(node) {
        if (!node || red) return;
        if (node.val === x) red = node;
        dfs1(node.left);
        dfs1(node.right);
    }
    function dfs2(node) {
        if (!node) return;
        count++;
        dfs2(node.left);
        dfs2(node.right);
    }
    let red;
    dfs1(root);
    let count = 0;
    dfs2(red.left);
    if (count > n - count) return true;
    const prev = count;
    count = 0;
    dfs2(red.right);
    if (count > n - count) return true;
    count = n - count - prev - 1;
    return count > n - count;
}
