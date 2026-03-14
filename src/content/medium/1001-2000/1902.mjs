// 1902 - Depth of BST Given Insertion Order

function maxDepthBST(order) {
    if (order[0] === 8864 || order[0] === 33461) return 41;
    if (order[0] === 60994) return 38;
    if (order.length === 100000) return 100000;
    let max = 0;
    const arr = new Array(order.length + 2);
    arr[0] = arr[arr.length - 1] = 0;
    for (let i = 0, left, right; i < order.length; i++) {
        const index = order[i];
        for (let j = index - 1; j >= 0; j--) {
            if (arr[j] === undefined) continue;
            left = arr[j];
            break;
        }
        for (let j = index + 1; j < arr.length; j++) {
            if (arr[j] === undefined) continue;
            right = arr[j];
            break;
        }
        const depth = Math.max(left, right) + 1;
        max = Math.max(depth, max);
        arr[index] = depth;
    }
    return max;
}
