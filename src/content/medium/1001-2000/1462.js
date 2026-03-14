// 1462 - Course Schedule IV

function checkIfPrerequisite(numCourses, prerequisites, queries) {
    const mapper = () => new Uint8Array(numCourses);
    const adj = Array.from({ length: numCourses }, () => []);
    const indegree = mapper();
    for (let i = 0; i < prerequisites.length; i++) {
        adj[prerequisites[i][0]].push(prerequisites[i][1]);
        indegree[prerequisites[i][1]]++;
    }
    let queue = [];
    for (let n = 0; n < numCourses; n++) {
        if (!indegree[n]) queue.push(n);
    }
    const mat = Array.from({ length: numCourses }, mapper);
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const u = queue[i], neighbors = adj[u];
            for (let j = 0; j < neighbors.length; j++) {
                const v = neighbors[j];
                mat[u][v] = 1;
                for (let n = 0; n < numCourses; n++) {
                    if (mat[n][u]) mat[n][v] = 1;
                }
                if (!--indegree[v]) nextQueue.push(v);
            }
        }
        queue = nextQueue;
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i] = mat[queries[i][0]][queries[i][1]];
    }
    return queries;
}
