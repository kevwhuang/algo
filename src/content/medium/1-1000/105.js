// 105 - Construct Binary Tree From Preorder and Inorder Traversal

function buildTree(preorder, inorder) {
    function dfs(node) {
        if (inorder[j] === node) return null;
        return new TreeNode(preorder[i], dfs(preorder[i++]), dfs(node, j++));
    }
    let i = 0, j = 0;
    return dfs();
}
