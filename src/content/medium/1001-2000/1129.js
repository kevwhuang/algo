// 1129 - Shortest Path With Alternating Colors

function shortestAlternatingPaths(n, redEdges, blueEdges) {
    const adj = new Array(n);
    for (let i = 0; i < n; i++) {
        adj[i] = { r: [], b: [] };
    }
    for (let i = 0; i < redEdges.length; i++) {
        adj[redEdges[i][0]].r.push(redEdges[i][1]);
    }
    for (let i = 0; i < blueEdges.length; i++) {
        adj[blueEdges[i][0]].b.push(blueEdges[i][1]);
    }
    const res = new Array(n).fill(-1);
    const seen = { r: new Set(), b: new Set() };
    let queue = [[0, 'r'], [0, 'b']];
    let dist = 0;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const v1 = queue[i][0];
            if (res[v1] === -1) res[v1] = dist;
            const color = queue[i][1] === 'r' ? 'b' : 'r';
            const neighbors = adj[v1][color];
            for (let j = 0; j < neighbors.length; j++) {
                const v2 = neighbors[j];
                if (seen[color].has(v2)) continue;
                seen[color].add(v2);
                nextQueue.push([v2, color]);
            }
        }
        queue = nextQueue;
        dist++;
    }
    return res;
}
