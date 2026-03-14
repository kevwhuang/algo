// 310 - Minimum Height Trees

function findMinHeightTrees(n, edges) {
    if (n === 1) return [0];
    const adj = Array.from({ length: n }, () => []);
    const indegree = new Array(n).fill(0);
    for (let i = 0; i < edges.length; i++) {
        const v1 = edges[i][0], v2 = edges[i][1];
        adj[v1].push(v2);
        adj[v2].push(v1);
        indegree[v1]++;
        indegree[v2]++;
    }
    let queue = [];
    for (let v = 0; v < n; v++) {
        if (indegree[v] === 1) queue.push(v);
    }
    while (true) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const neighbors = adj[queue[i]];
            for (let j = 0; j < neighbors.length; j++) {
                const v = neighbors[j];
                if (--indegree[v] === 1) nextQueue.push(v);
            }
        }
        if (nextQueue.length === 0) return queue;
        queue = nextQueue;
    }
}
