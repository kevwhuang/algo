// 993 - Cousins in Binary Tree

function isCousins(root, x, y) {
    const queue = [root];
    while (queue.length) {
        const len = queue.length;
        let parentX = 0, parentY = 0;
        for (let i = 0, cur; i < len; i++) {
            cur = queue.shift();
            if (cur.left) {
                queue.push(cur.left);
                cur.left.val === x && (parentX = cur.val);
                cur.left.val === y && (parentY = cur.val);
            }
            if (cur.right) {
                queue.push(cur.right);
                cur.right.val === x && (parentX = cur.val);
                cur.right.val === y && (parentY = cur.val);
            }
            if (parentX && parentY) return parentX !== parentY;
        }
        if ((parentX && !parentY) || (!parentX && parentY)) return false;
    }
    return false;
}
