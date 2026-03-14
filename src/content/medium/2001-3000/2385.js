// 2385 - Amount of Time for Binary Tree to Be Infected

function amountOfTime(root, start) {
    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (node.val === start) {
            time = Math.max(left, right);
            return -1;
        } else if (left >= 0 && right >= 0) {
            return Math.max(left, right) + 1;
        }
        time = Math.max(Math.abs(left - right), time);
        return Math.min(left, right) - 1;
    }
    let time = 0;
    dfs(root);
    return time;
}
