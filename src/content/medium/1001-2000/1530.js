// 1530 - Number of Good Leaf Nodes Pairs

function countPairs(root, distance) {
    function dfs1(node) {
        if (!node.left && !node.right) return leaves.add(node);
        if (node.left) {
            parents.set(node.left, node);
            dfs1(node.left);
        }
        if (node.right) {
            parents.set(node.right, node);
            dfs1(node.right);
        }
    }
    function dfs2(node, prev, dist) {
        if (dist > distance) return;
        if (leaves.has(node)) count++;
        if (node.left && node.left !== prev) {
            dfs2(node.left, node, dist + 1);
        }
        if (node.right && node.right !== prev) {
            dfs2(node.right, node, dist + 1);
        }
        if (parents.has(node) && parents.get(node) !== prev) {
            dfs2(parents.get(node), node, dist + 1);
        }
    }
    const leaves = new Set(), parents = new Map();
    dfs1(root);
    let count = -leaves.size;
    for (const leaf of leaves) {
        dfs2(leaf, null, 0);
    }
    return count / 2;
}
