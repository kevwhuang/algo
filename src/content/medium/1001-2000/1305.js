// 1305 - All Elements in Two Binary Search Trees

function getAllElements(root1, root2) {
    function dfs(node) {
        if (!node) return;
        res.push(node.val);
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    }
    const res = [];
    dfs(root1);
    dfs(root2);
    return res.sort((a, b) => a - b);
}
