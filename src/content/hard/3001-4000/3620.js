// 3620 - Network Recovery Pathways

function findMaxPathScore(edges, online, k) {
    const n = online.length, set = new Set();
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1], w = edges[i][2];
        if (!online[u] || !online[v] || w > k) continue;
        adj[u].push([v, w]);
        set.add(w);
    }
    const arr = new Uint32Array(set).sort(), C = new Array(n);
    let flag, l = 0, r = arr.length - 1;
    while (l <= r) {
        C.fill(Infinity)[0] = 0, flag = true;
        const m = l + r >> 1, tgt = arr[m];
        while (flag) {
            flag = false;
            for (let u = 0; u < n; u++) {
                const cur = adj[u], w = C[u];
                if (w === Infinity) continue;
                for (let i = 0; i < cur.length; i++) {
                    const v = cur[i][0], ww = cur[i][1];
                    if (ww >= tgt && w + ww < C[v]) C[v] = w + ww, flag = true;
                }
            }
        }
        if (C[n - 1] <= k) l = m + 1;
        else r = m - 1;
    }
    return ~r ? arr[r] : r;
}
