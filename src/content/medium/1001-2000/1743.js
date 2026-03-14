// 1743 - Restore the Array From Adjacent Pairs

function restoreArray(adjacentPairs) {
    const adj = new Map();
    for (let i = 0; i < adjacentPairs.length; i++) {
        const pair = adjacentPairs[i];
        if (!adj.has(pair[0])) adj.set(pair[0], []);
        adj.get(pair[0]).push(pair[1]);
        if (!adj.has(pair[1])) adj.set(pair[1], []);
        adj.get(pair[1]).push(pair[0]);
    }
    const nums = new Array(adjacentPairs.length + 1);
    let next;
    for (const k of adj.keys()) {
        if (adj.get(k).length !== 1) continue;
        nums[0] = k;
        next = adj.get(k)[0];
        adj.delete(k);
        break;
    }
    for (let i = 1; i < nums.length; i++) {
        nums[i] = next;
        const edges = adj.get(next);
        adj.delete(next);
        next = adj.has(edges[0]) ? edges[0] : edges[1];
    }
    return nums;
}
