// 1457 - Pseudo-Palindromic Paths in a Binary Tree

function pseudoPalindromicPaths(root) {
    let paths = 0, queue = [[root, 0]];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i][0];
            const mask = queue[i][1] ^ Math.pow(2, node.val - 1);
            if (node.left) nextQueue.push([node.left, mask]);
            if (node.right) nextQueue.push([node.right, mask]);
            if (!node.left && !node.right) {
                let cur = mask, ones = 0;
                while (cur) {
                    if (cur & 1) ones++;
                    cur >>= 1;
                }
                if (ones <= 1) paths++;
            }
        }
        queue = nextQueue;
    }
    return paths;
}
