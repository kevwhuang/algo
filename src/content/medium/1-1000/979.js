// 979 - Distribute Coins in Binary Tree

function distributeCoins(root) {
    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        moves += Math.abs(left) + Math.abs(right);
        return node.val + left + right - 1;
    }
    let moves = 0;
    dfs(root);
    return moves;
}
