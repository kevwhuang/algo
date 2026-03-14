// 2493 - Divide Nodes Into the Maximum Number of Groups

function magnificentSets(n, edges) {
    let res = 0;
    const seen = new Uint8Array(n + 1);
    const adj = Array.from({ length: n + 1 }, () => []);
    edges.forEach(e => adj[e[0]].push(e[1]) && adj[e[1]].push(e[0]));
    for (let u = 1; u <= n; u++) {
        if (seen[u]) continue;
        seen[u] = 1;
        const cur = [u];
        let tgt = 2, Q = [u];
        while (Q.length) {
            const N = [];
            for (let i = 0; i < Q.length; i++) {
                const arr = adj[Q[i]];
                for (let j = 0; j < arr.length; j++) {
                    const v = arr[j];
                    if (seen[v] && seen[v] !== tgt) return -1;
                    if (seen[v]) continue;
                    seen[v] = tgt;
                    cur.push(v);
                    N.push(v);
                }
            }
            tgt = tgt === 1 ? 2 : 1, Q = N;
        }
        let max = 1;
        for (let i = 0; i < cur.length; i++) {
            cur.forEach(e => seen[e] = 0);
            seen[cur[i]] = 1;
            let acc = 0, Q = [cur[i]];
            while (Q.length) {
                const N = [];
                for (let j = 0; j < Q.length; j++) {
                    const arr = adj[Q[j]];
                    for (let k = 0; k < arr.length; k++) {
                        const v = arr[k];
                        if (seen[v]) continue;
                        seen[v] = 1;
                        N.push(v);
                    }
                }
                acc++, Q = N;
            }
            max = Math.max(acc, max);
        }
        res += max;
    }
    return res;
}
