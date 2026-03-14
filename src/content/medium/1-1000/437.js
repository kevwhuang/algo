// 437 - Path Sum III

function pathSum(root, targetSum) {
    function dfs(node, pathSum) {
        if (!node) return;
        pathSum += node.val;
        if (pathSum === targetSum) paths++;
        paths += obj[pathSum - targetSum] ?? 0;
        obj[pathSum] ??= 0;
        obj[pathSum]++;
        dfs(node.left, pathSum);
        dfs(node.right, pathSum);
        obj[pathSum]--;
    }
    let paths = 0;
    const obj = {};
    dfs(root, 0);
    return paths;
}
