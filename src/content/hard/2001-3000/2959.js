// 2959 - Number of Possible Sets of Closing Branches

function numberOfSets(n, maxDistance, roads) {
    function backtrack(i) {
        if (i < n) arr[i]++ | backtrack(i + 1) | arr[i]--;
        if (i < n) return backtrack(i + 1);
        for (let u = 0; u < n; u++) {
            if (arr[u] === 0) continue;
            C.fill(-1)[u] = 0;
            let Q = [[u, 0]];
            while (Q.length) {
                const N = [];
                for (let j = 0; j < Q.length; j++) {
                    const adj = M[Q[j][0]], w = Q[j][1];
                    for (let v = 0; v < n; v++) {
                        if (arr[v] === 0) continue;
                        const next = w + adj[v];
                        if (next >= C[v]) continue;
                        C[v] = next;
                        N.push([v, next]);
                    }
                }
                Q = N;
            }
            for (let v = 0; v < n; v++) {
                if (arr[v] && C[v] > maxDistance) return;
            }
        }
        return res++;
    }
    const M = Array.from({ length: n }, () => new Uint32Array(n).fill(-1));
    for (let i = 0; i < roads.length; i++) {
        const u = roads[i][0], v = roads[i][1];
        M[u][v] = M[v][u] = Math.min(roads[i][2], M[u][v]);
    }
    let res = 0;
    const arr = new Uint8Array(n), C = new Uint32Array(n);
    backtrack(0);
    return res;
}
