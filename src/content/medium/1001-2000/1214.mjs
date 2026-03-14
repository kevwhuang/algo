// 1214 - Two Sum BSTs

function twoSumBSTs(root1, root2, target) {
    function dfs1(node) {
        if (!node) return;
        dfs1(node.left);
        set.add(node.val);
        dfs1(node.right);
    }
    function dfs2(node) {
        if (!node || found) return;
        dfs2(node.left);
        if (set.has(target - node.val)) found = true;
        dfs2(node.right);
    }
    const set = new Set();
    dfs1(root1);
    let found = false;
    dfs2(root2);
    return found;
}
