// 3419 - Minimize the Maximum Edge Weight of Graph

function minMaxWeight(n, edges, threshold) {
    function dfs(node) {
        acc++, seen[node] = 1;
        const next = adj[node];
        for (let i = 0; i < next.length; i++) {
            if (seen[next[i][0]] || next[i][1] > m) continue;
            dfs(next[i][0]);
        }
    }
    const adj = Array.from({ length: n }, () => []);
    let max = 1;
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][1]].push([edges[i][0], edges[i][2]]);
        max = Math.max(edges[i][2], max);
    }
    let acc, m, l = 1, r = max;
    const seen = new Uint8Array(n);
    while (l <= r) {
        acc = 0, m = l + r >> 1;
        seen.fill(0);
        dfs(0);
        if (acc < n) l = m + 1;
        else r = m - 1;
    }
    return l <= max ? l : -1;
}
