// 549 - Binary Tree Longest Consecutive Sequence II

function longestConsecutive(root) {
    function dfs(node) {
        if (!node) return [0, 0];
        const val = node.val;
        const left = dfs(node.left);
        const leftInc = node.left && node.left.val + 1 === val && left[0];
        const leftDec = node.left && node.left.val - 1 === val && left[1];
        const right = dfs(node.right);
        const rightInc = node.right && node.right.val + 1 === val && right[0];
        const rightDec = node.right && node.right.val - 1 === val && right[1];
        const inc = Math.max(0, leftInc, rightInc);
        const dec = Math.max(0, leftDec, rightDec);
        max = Math.max(inc + dec + 1, max);
        return [inc + 1, dec + 1];
    }
    let max = 1;
    dfs(root);
    return max;
}
