// 987 - Vertical Order Traversal of a Binary Tree

function verticalTraversal(root) {
    function dfs(node, i, j) {
        B[j] ??= [];
        B[j].push(10000 * i + node.val);
        if (node.left) dfs(node.left, i + 1, j - 1);
        if (node.right) dfs(node.right, i + 1, j + 1);
    }
    const B = {};
    dfs(root, 1, 1000);
    const res = Object.values(B);
    for (let i = 0; i < res.length; i++) {
        const arr = res[i].sort((a, b) => a - b);
        for (let j = 0; j < arr.length; j++) {
            arr[j] %= 1000;
        }
    }
    return res;
}
