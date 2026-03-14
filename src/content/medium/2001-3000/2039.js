// 2039 - The Time When the Network Becomes Idle

function networkBecomesIdle(edges, patience) {
    const adj = Array.from({ length: patience.length }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }
    const dists = new Uint32Array(adj.length);
    dists[0] = 1;
    let dist = 1, queue = [0];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const neighbors = adj[queue[i]];
            for (let j = 0; j < neighbors.length; j++) {
                const n = neighbors[j];
                if (dists[n]) continue;
                dists[n] = dist;
                nextQueue.push(n);
            }
        }
        dist++;
        queue = nextQueue;
    }
    let time = 0;
    for (let n = 1; n < adj.length; n++) {
        const first = 2 * dists[n];
        const last = ((first - 1) / patience[n] >> 0) * patience[n];
        time = Math.max(first + last, time);
    }
    return time + 1;
}
