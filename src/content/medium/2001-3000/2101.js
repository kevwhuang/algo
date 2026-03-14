// 2101 - Detonate the Maximum Bombs

function maximumDetonation(bombs) {
    const adj = new Map();
    for (let i = 0; i < bombs.length; i++) {
        const x = bombs[i][0], y = bombs[i][1];
        const target = bombs[i][2] ** 2;
        for (let j = 0; j < bombs.length; j++) {
            if (i === j) continue;
            const dx = x - bombs[j][0];
            const dy = y - bombs[j][1];
            if (dx ** 2 + dy ** 2 > target) continue;
            if (!adj.has(i)) adj.set(i, []);
            adj.get(i).push(j);
        }
    }
    let max = 1;
    for (const root of adj.keys()) {
        const seen = new Set([root]);
        let queue = [root];
        while (queue.length) {
            const nextQueue = [];
            for (let i = 0; i < queue.length; i++) {
                if (!adj.has(queue[i])) continue;
                const neighbors = adj.get(queue[i]);
                for (let j = 0; j < neighbors.length; j++) {
                    if (seen.has(neighbors[j])) continue;
                    seen.add(neighbors[j]);
                    nextQueue.push(neighbors[j]);
                }
            }
            queue = nextQueue;
        }
        max = Math.max(seen.size, max);
        if (max === bombs.length) break;
    }
    return max;
}
