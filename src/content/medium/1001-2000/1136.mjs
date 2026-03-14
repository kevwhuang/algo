// 1136 - Parallel Courses

function minimumSemesters(n, relations) {
    const adj = {};
    const indegree = new Array(n + 1).fill(0);
    for (let i = 0; i < relations.length; i++) {
        const u = relations[i][0], v = relations[i][1];
        adj[u] ? adj[u].push(v) : adj[u] = [v];
        indegree[v]++;
    }
    let queue = [];
    for (let i = 1; i <= n; i++) {
        if (indegree[i] === 0) queue.push(i);
    }
    const seen = new Set();
    let semesters = 0;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const u = queue[i];
            seen.add(u);
            if (!adj[u]) continue;
            const neighbors = adj[u];
            for (let j = 0; j < neighbors.length; j++) {
                const v = neighbors[j];
                if (--indegree[v] === 0) nextQueue.push(v);
            }
        }
        semesters++;
        queue = nextQueue;
    }
    return seen.size === n ? semesters : -1;
}
