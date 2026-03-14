// 3311 - Construct 2D Grid Matching Graph Layout

function constructGridLayout(n, edges) {
    const adj = Array.from({ length: n }, () => new Set());
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        adj[u].add(v);
        adj[v].add(u);
    }
    let u = 0, min = 3;
    for (let v = 1; v < n; v++) {
        if (adj[v].size < min) u = v, min = adj[v].size;
    }
    const arr = [u];
    const seen = new Uint8Array(n).fill(1, u, u + 1);
    const tgt = [...adj[u]].some(v => adj[v].size === 2) ? 3 : 4;
    do {
        for (const v of adj[arr.at(-1)]) {
            if (seen[v] || adj[v].size === tgt) continue;
            arr[arr.length] = v, seen[v] = 1;
            break;
        }
    } while (adj[arr.at(-1)].size > min);
    const m = n / (n = arr.length);
    const res = Array.from({ length: m }, () => new Uint16Array(n));
    res[0] = arr;
    for (let r = 1; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const next = adj[c ? res[r][c - 1] : res[r - 1][c]];
            for (const v of adj[res[r - 1][c]]) {
                if (seen[v] || !next.has(v)) continue;
                res[r][c] = v, seen[v] = 1;
                break;
            }
        }
    }
    return res;
}
