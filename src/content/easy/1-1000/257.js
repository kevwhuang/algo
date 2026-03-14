// 257 - Binary Tree Paths

function binaryTreePaths(root) {
    function dfs(node, str) {
        if (!node) return;
        str = str ? `${str}->${node.val}` : `${node.val}`;
        if (!node.left && !node.right) paths.push(str);
        dfs(node.left, str);
        dfs(node.right, str);
    }
    const paths = [];
    dfs(root);
    return paths;
}
