// 364 - Nested List Weight Sum II

function depthSumInverse(nestedList) {
    const arr = new Array(51).fill(0);
    let maxDepth = 1, queue = [nestedList];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const cur = queue[i];
            for (let j = 0; j < cur.length; j++) {
                if (cur[j].isInteger()) {
                    arr[maxDepth] += cur[j].getInteger();
                } else {
                    const list = cur[j].getList();
                    if (list.length) nextQueue.push(list);
                }
            }
        }
        maxDepth++, queue = nextQueue;
    }
    let res = 0, depth = maxDepth;
    while (depth--) res += arr[depth] * (maxDepth - depth);
    return res;
}
