// 270 - Closest Binary Search Tree Value

function closestValue(root, target) {
    let res = Infinity;
    while (root) {
        const val = root.val;
        const abs1 = Math.abs(val - target);
        const abs2 = Math.abs(res - target);
        if (abs1 === abs2) res = Math.min(val, res);
        else if (abs1 < abs2) res = val;
        root = target < val ? root.left : root.right;
    }
    return res;
}
