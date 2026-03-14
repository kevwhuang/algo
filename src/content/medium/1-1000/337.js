// 337 - House Robber III

function rob(root) {
    function dfs(node) {
        if (!node) return [0, 0];
        const l = dfs(node.left);
        const r = dfs(node.right);
        let max = Math.max(l[0] + r[0], l[0] + r[1]);
        max = Math.max(l[1] + r[0], l[1] + r[1], max);
        return [node.val + l[1] + r[1], max];
    }
    return Math.max(...dfs(root));
}
