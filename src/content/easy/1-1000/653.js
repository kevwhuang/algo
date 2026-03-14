// 653 - Two Sum IV - Input Is a BST

function findTarget(root, k) {
    const set = new Set();
    const queue = [root];
    let cur;
    while (queue.length) {
        cur = queue.shift();
        if (set.has(k - cur.val)) return true;
        set.add(cur.val);
        cur.left && queue.push(cur.left);
        cur.right && queue.push(cur.right);
    }
    return false;
}
