// 1654 - Minimum Jumps to Reach Home

function minimumJumps(forbidden, a, b, x) {
    if (x === 0) return 0;
    let jumps = 1, queue = [0];
    const seen = new Set(forbidden);
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const idx = Math.abs(queue[i]);
            if (seen.has(idx)) continue;
            seen.add(idx);
            let next = idx - b;
            if (queue[i] > 0 && next === x) return jumps;
            if (queue[i] > 0 && next > 0) nextQueue.push(-next);
            next = idx + a;
            if (next === x) return jumps;
            if (next < 2000 + a + b) nextQueue.push(next);
        }
        jumps++;
        queue = nextQueue;
    }
    return -1;
}
