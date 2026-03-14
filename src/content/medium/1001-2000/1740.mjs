// 1740 - Find Distance in a Binary Tree

function findDistance(root, p, q) {
    function dfs1(node, parent) {
        if (!node) return;
        if (node.val === p) start = node;
        map.set(node, parent);
        dfs1(node.left, node);
        dfs1(node.right, node);
    }
    function dfs2(node, dist) {
        if (res || !node || node.val === -1) return;
        if (node.val === q) return res = dist;
        node.val = -1;
        dfs2(map.get(node), dist + 1);
        dfs2(node.left, dist + 1);
        dfs2(node.right, dist + 1);
    }
    let start;
    const map = new Map();
    dfs1(root, null);
    let res;
    dfs2(start, 0);
    return res;
}
