// 2285 - Maximum Total Importance of Roads

function maximumImportance(n, roads) {
    const indegree = new Uint16Array(n);
    for (const [v1, v2] of roads) {
        indegree[v1]++, indegree[v2]++;
    }
    indegree.sort((a, b) => a - b);
    let importance = 0, i = 0;
    while (i < n) importance += indegree[i] * ++i;
    return importance;
}
