// 1466 - Reorder Routes to Make All Paths Lead to the City Zero

function minReorder(n, connections) {
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < connections.length; i++) {
        adj[connections[i][0]].push(connections[i][1]);
        adj[connections[i][1]].push(-connections[i][0]);
    }
    let reorders = 0;
    let queue = [0];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const neighbors = adj[queue[i]];
            for (let j = 0; j < neighbors.length; j++) {
                const neighbor = Math.abs(neighbors[j]);
                if (!adj[neighbor]) continue;
                if (neighbor === neighbors[j]) reorders++;
                newQueue.push(neighbor);
            }
            adj[queue[i]] = false;
        }
        queue = newQueue;
    }
    return reorders;
}
