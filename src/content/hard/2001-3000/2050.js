// 2050 - Parallel Courses III

function minimumTime(n, relations, time) {
    const adj = Array.from({ length: n }, () => []);
    const deg = new Uint16Array(n);
    for (let i = 0; i < relations.length; i++) {
        const u = relations[i][0] - 1, v = relations[i][1] - 1;
        adj[u].push(v), deg[v]++;
    }
    const dp = new Uint32Array(n);
    let Q = [];
    for (let v = 0; v < n; v++) {
        if (deg[v] === 0) dp[v] = time[v], Q.push(v);
    }
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const A = adj[Q[i]], prev = dp[Q[i]];
            for (let j = 0; j < A.length; j++) {
                const v = A[j];
                dp[v] = Math.max(prev + time[v], dp[v]);
                if (--deg[v] === 0) N.push(v);
            }
        }
        Q = N;
    }
    return dp.reduce((s, e) => Math.max(e, s));
}
