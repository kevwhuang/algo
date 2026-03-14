// 663 - Equal Tree Partition

function checkEqualTree(root) {
    function dfs(node) {
        if (!node) return 0;
        const sub = node.val + dfs(node.left) + dfs(node.right);
        if (node === root) sum = sub;
        else set.add(sub);
        return sub;
    }
    let sum;
    const set = new Set();
    dfs(root);
    return set.has(sum / 2);
}
