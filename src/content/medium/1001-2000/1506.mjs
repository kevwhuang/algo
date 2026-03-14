// 1506 - Find Root of N-Ary Tree

function findRoot(tree) {
    let target = 0;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        target += node.val;
        for (let j = 0; j < node.children.length; j++) {
            target -= node.children[j].val;
        }
    }
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].val === target) return tree[i];
    }
}
