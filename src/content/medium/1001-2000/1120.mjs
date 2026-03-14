// 1120 - Maximum Average Subtree

function maximumAverageSubtree(root) {
    function dfs(node) {
        if (!node) return [0, 0];
        const left = dfs(node.left);
        const right = dfs(node.right);
        const sum = node.val + left[0] + right[0];
        const count = left[1] + right[1] + 1;
        max = Math.max(sum / count, max);
        return [sum, count];
    }
    let max = 0;
    dfs(root);
    return max;
}
