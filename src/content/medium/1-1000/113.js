// 113 - Path Sum II

function pathSum(root, targetSum) {
    function dfs(node, sum, path) {
        sum += node.val;
        path.push(node.val);
        if (sum === targetSum && !node.left && !node.right) {
            paths.push([...path]);
        }
        if (node.left) dfs(node.left, sum, path);
        if (node.right) dfs(node.right, sum, path);
        path.pop();
    }
    if (!root) return [];
    const paths = [];
    dfs(root, 0, []);
    return paths;
}
