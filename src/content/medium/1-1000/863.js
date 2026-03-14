// 863 - All Nodes Distance K in Binary Tree

function distanceK(root, target, k) {
    function dfs1(node) {
        if (node.left) {
            map.set(node.left.val, node);
            dfs1(node.left);
        }
        if (node.right) {
            map.set(node.right.val, node);
            dfs1(node.right);
        }
    }
    function dfs2(node, dist) {
        if (seen.has(node.val)) return;
        if (dist === k) return res.push(node.val);
        seen.add(node.val);
        if (node.left) dfs2(node.left, dist + 1);
        if (node.right) dfs2(node.right, dist + 1);
        if (map.has(node.val)) dfs2(map.get(node.val), dist + 1);
    }
    const map = new Map();
    dfs1(root);
    const res = [], seen = new Set();
    dfs2(target, 0);
    return res;
}
