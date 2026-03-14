// 1609 - Even Odd Tree

function isEvenOddTree(root) {
    let isOdd = true;
    let queue = [root];
    while (queue.length) {
        let prev = isOdd ? -Infinity : Infinity;
        for (let i = 0, len = queue.length; i < len; i++) {
            const node = queue.shift();
            const val = node.val;
            if (isOdd) {
                if (val % 2 === 0) return false;
                if (val <= prev) return false;
            } else {
                if (val % 2 === 1) return false;
                if (val >= prev) return false;
            }
            prev = val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        isOdd = !isOdd;
    }
    return true;
}
