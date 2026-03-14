// 3243 - Shortest Distance After Road Addition Queries I

function shortestDistanceAfterQueries(n, queries) {
    const adj = Array.from({ length: n }, (_, i) => [i + 1]);
    const costs = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < queries.length; i++) {
        adj[queries[i][0]].push(queries[i][1]);
        let queue = [queries[i][0]];
        while (queue.length) {
            const nextQueue = [];
            for (let i = 0; i < queue.length; i++) {
                const u = queue[i], neighbors = adj[u];
                if (!neighbors) continue;
                for (let j = 0; j < neighbors.length; j++) {
                    const v = neighbors[j];
                    if (costs[v] <= costs[u] + 1) continue;
                    costs[v] = costs[u] + 1;
                    nextQueue.push(v);
                }
            }
            queue = nextQueue;
        }
        queries[i] = costs[n - 1];
    }
    return queries;
}
