// 652 - Find Duplicate Subtrees

function findDuplicateSubtrees(root) {
    function dfs(node) {
        if (!node) return '';
        const left = dfs(node.left);
        const right = dfs(node.right);
        const serial = `${node.val}_${left}_${right}`;
        if (map.has(serial)) set.add(map.get(serial));
        else map.set(serial, node);
        return serial;
    }
    const map = new Map();
    const set = new Set();
    dfs(root);
    return [...set];
}
