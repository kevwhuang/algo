// 785 - Is Graph Bipartite

function isBipartite(graph) {
    const group = new Uint8Array(graph.length);
    const stack = [];
    for (let n = 0; n < graph.length; n++) {
        if (group[n]) continue;
        group[n] = 1;
        stack.push(n);
        while (stack.length) {
            const u = stack.pop();
            const neighbors = graph[u];
            for (let i = 0; i < neighbors.length; i++) {
                const v = neighbors[i];
                if (group[u] === group[v]) return false;
                if (group[v]) continue;
                group[v] = group[u] === 1 ? 2 : 1;
                stack.push(v);
            }
        }
    }
    return true;
}
