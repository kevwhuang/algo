// 1761 - Minimum Degree of a Connected Trio in a Graph

function minTrioDegree(n, edges) {
    const M = Array.from({ length: n + 1 }, () => new Uint8Array(n + 1));
    const deg = new Uint16Array(n + 1);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        M[u][v]++, M[v][u]++, deg[u]++, deg[v]++;
    }
    let res = Infinity;
    for (let u = 1; u < n; u++) {
        for (let v = u + 1; v < n; v++) {
            if (!M[u][v]) continue;
            for (let w = v + 1; w <= n; w++) {
                if (!M[u][w] || !M[v][w]) continue;
                res = Math.min(deg[u] + deg[v] + deg[w], res);
            }
        }
    }
    return res < Infinity ? res - 6 : -1;
}
