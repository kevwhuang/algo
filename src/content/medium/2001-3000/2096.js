// 2096 - Step-by-Step Directions From a Binary Tree Node to Another

function getDirections(root, startValue, destValue) {
    function dfs1(node, parent) {
        node.parent = parent;
        if (node.val === startValue) start = node;
        if (node.left) dfs1(node.left, node);
        if (node.right) dfs1(node.right, node);
    }
    function dfs2(node, prev, path) {
        if (res) return;
        if (node.val === destValue) return res = path;
        if (node.parent && node.parent !== prev) {
            dfs2(node.parent, node, path + 'U');
        }
        if (node.left && node.left !== prev) {
            dfs2(node.left, node, path + 'L');
        }
        if (node.right && node.right !== prev) {
            dfs2(node.right, node, path + 'R');
        }
    }
    let start;
    dfs1(root, null);
    let res;
    dfs2(start, null, '');
    return res;
}
