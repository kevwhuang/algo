// 95 - Unique Binary Search Trees II

function generateTrees(n) {
    function dfs(l, r) {
        if (l > r) return [null];
        const res = [];
        for (let i = l; i <= r; i++) {
            const left = dfs(l, i - 1);
            const right = dfs(i + 1, r);
            for (let j = 0; j < left.length; j++) {
                for (let k = 0; k < right.length; k++) {
                    res.push(new TreeNode(i, left[j], right[k]));
                }
            }
        }
        return res;
    }
    return dfs(1, n);
}
