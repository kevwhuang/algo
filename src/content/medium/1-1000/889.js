// 889 - Construct Binary Tree From Preorder and Postorder Traversal

function constructFromPrePost(preorder, postorder) {
    function dfs() {
        const node = new TreeNode(preorder[i++]);
        if (node.val !== postorder[j]) node.left = dfs();
        if (node.val !== postorder[j]) node.right = dfs();
        j++;
        return node;
    }
    let i = 0, j = 0;
    return dfs();
}
