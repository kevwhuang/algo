// 988 - Smallest String Starting From Leaf

function smallestFromLeaf(root) {
    function dfs(node, cur) {
        const next = String.fromCharCode(node.val + 97) + cur;
        if (!node.left && !node.right && next < res) res = next;
        if (node.left) dfs(node.left, next);
        if (node.right) dfs(node.right, next);
    }
    let res = '~';
    dfs(root, '');
    return res;
}
