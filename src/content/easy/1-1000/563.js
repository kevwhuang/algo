// 563 - Binary Tree Tilt

function findTilt(root) {
    function dfs(cur) {
        if (!cur) return 0;
        const left = dfs(cur.left);
        const right = dfs(cur.right);
        sum += Math.abs(left - right);
        return cur.val + left + right;
    }
    let sum = 0;
    dfs(root);
    return sum;
}
