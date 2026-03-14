// 2077 - Paths in Maze That Lead to Same Room

function numberOfPaths(n, corridors) {
    const adj = Array.from({ length: n }, () => new Set());
    for (let i = 0; i < corridors.length; i++) {
        const u = Math.min(...corridors[i]) - 1;
        const v = Math.max(...corridors[i]) - 1;
        adj[u].add(v);
    }
    let confusion = 0;
    for (let u = 0; u < n; u++) {
        for (let v = u + 1; v < n; v++) {
            if (!adj[u].has(v)) continue;
            adj[u].forEach(w => adj[v].has(w) && confusion++);
        }
    }
    return confusion;
}
