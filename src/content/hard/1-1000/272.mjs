// 272 - Closest Binary Search Tree Value II

function closestKValues(root, target, k) {
    function dfs(node) {
        if (node.left) dfs(node.left);
        arr.push(node.val);
        if (node.right) dfs(node.right);
    }
    const arr = [];
    dfs(root);
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (arr[m] < target) l = m + 1;
        else r = m - 1;
    }
    l = r++;
    const res = new Uint32Array(k);
    for (let i = 0; i < k; i++) {
        const abs1 = ~l ? Math.abs(arr[l] - target) : 1e10;
        const abs2 = r < arr.length ? Math.abs(arr[r] - target) : 1e10;
        res[i] = abs1 < abs2 ? arr[l--] : arr[r++];
    }
    return res;
}
