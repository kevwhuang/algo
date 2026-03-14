// 928 - Minimize Malware Spread II

function minMalwareSpread(graph, initial) {
    const n = graph.length;
    const adj = Array.from({ length: n }, () => []);
    for (let r = 1; r < n; r++) {
        for (let c = 0; c < r; c++) {
            if (graph[r][c] === 0) continue;
            adj[r].push(c);
            adj[c].push(r);
        }
    }
    let res, min = 1000, i = -1;
    const seen = new Uint8Array(n), set = new Set(initial);
    while (++i < initial.length) {
        seen.fill(0);
        let acc = 0, Q = initial;
        const u = initial[i];
        while (Q.length) {
            const N = [];
            for (let j = 0; j < Q.length; j++) {
                if (Q[j] === u) continue;
                const arr = adj[Q[j]];
                for (let k = 0; k < arr.length; k++) {
                    const v = arr[k];
                    if (seen[v] || set.has(v)) continue;
                    seen[v] = 1, acc++;
                    N.push(v);
                }
            }
            Q = N;
        }
        if (acc === min) res = Math.min(u, res);
        else if (acc < min) res = u, min = acc;
    }
    return res;
}
