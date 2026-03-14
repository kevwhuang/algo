// 2685 - Count the Number of Complete Components

function countCompleteComponents(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1]);
        adj[edges[i][1]].push(edges[i][0]);
    }
    let components = 0;
    const seen = new Set();
    for (let u = 0; u < n; u++) {
        if (seen.has(u)) continue;
        let queue = [u], nodeCount = 0, edgeCount = 0;
        while (queue.length) {
            const nextQueue = [];
            for (let i = 0; i < queue.length; i++) {
                const v = queue[i];
                if (seen.has(v)) continue;
                seen.add(v);
                nodeCount++;
                const neighbors = adj[v];
                for (let j = 0; j < neighbors.length; j++) {
                    if (seen.has(neighbors[j])) continue;
                    edgeCount++;
                    nextQueue.push(neighbors[j]);
                }
            }
            queue = nextQueue;
        }
        if (nodeCount * (nodeCount - 1) / 2 === edgeCount) components++;
    }
    return components;
}
