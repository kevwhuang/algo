// 3319 - Kth Largest Perfect Subtree Size in Binary Tree

function kthLargestPerfectSubtree(root, k) {
    function dfs(node) {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (left === -1 || left !== right) return -1;
        arr.push(left + right + 1);
        return left + right + 1;
    }
    const arr = [];
    dfs(root);
    return arr.length < k ? -1 : new Uint16Array(arr).sort().at(-k);
}
