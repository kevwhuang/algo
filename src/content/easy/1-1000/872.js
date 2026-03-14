// 872 - Leaf-Similar Trees

function leafSimilar(root1, root2) {
    function dfs1(cur) {
        if (!cur) return;
        !cur.left && !cur.right && leaves.push(cur.val);
        dfs1(cur.left);
        dfs1(cur.right);
    }
    function dfs2(cur) {
        if (!cur || i === Infinity) return;
        if (!cur.left && !cur.right) {
            if (cur.val === leaves[i]) i++;
            else i = Infinity;
        }
        dfs2(cur.left);
        dfs2(cur.right);
    }
    const leaves = [];
    dfs1(root1);
    let i = 0;
    dfs2(root2);
    return i === leaves.length;
}
