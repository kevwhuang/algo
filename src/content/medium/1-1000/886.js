// 886 - Possible Bipartition

function possibleBipartition(n, dislikes) {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < dislikes.length; i++) {
        adj[dislikes[i][0]].push(dislikes[i][1]);
        adj[dislikes[i][1]].push(dislikes[i][0]);
    }
    const group = new Uint8Array(n + 1);
    const stack = [];
    for (let node = 1; node < adj.length; node++) {
        if (group[node]) continue;
        group[node] = 1;
        stack.push(node);
        while (stack.length) {
            const u = stack.pop(), neighbors = adj[u];
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
