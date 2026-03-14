// 1123 - Lowest Common Ancestor of Deepest Leaves

function lcaDeepestLeaves(root) {
    function dfs(node, depth) {
        if (!node) return depth - 1;
        height = Math.max(depth, height);
        const left = dfs(node.left, depth + 1);
        const right = dfs(node.right, depth + 1);
        if (left === height && right === height) lca = node;
        return Math.max(left, right);
    }
    let lca, height = 0;
    dfs(root, 0);
    return lca;
}
