// 2998 - Minimum Number of Operations to Make X and Y Equal

function minimumOperationsToMakeEqual(x, y) {
    if (x <= y) return y - x;
    let ops = 0, queue = [x];
    const seen = new Set();
    while (true) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const cur = queue[i];
            if (cur === y) return ops;
            if (seen.has(cur)) continue;
            seen.add(cur);
            nextQueue.push(cur + 1);
            if (cur < y) continue;
            nextQueue.push(cur - 1);
            if (cur % 5 === 0) nextQueue.push(cur / 5);
            if (cur % 11 === 0) nextQueue.push(cur / 11);
        }
        ops++, queue = nextQueue;
    }
}
