// 3535 - Unit Conversion II

function queryConversions(conversions, queries) {
    const n = conversions.length;
    const M = new Uint32Array(n + 1);
    M[0] = 1;
    const adj = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < n; i++) {
        adj[conversions[i][0]].push(i);
    }
    let Q = [0];
    const mod = 1000000007n;
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const u = Q[i], arr = adj[u];
            for (let j = 0; j < arr.length; j++) {
                const v = conversions[arr[j]][1];
                const prod = BigInt(M[u]) * BigInt(conversions[arr[j]][2]);
                M[v] = Number(prod % mod);
                N.push(v);
            }
        }
        Q = N;
    }
    for (let i = 0; i < queries.length; i++) {
        let inv = 1n, k = BigInt(M[queries[i][0]]), cur = mod - 2n;
        while (cur) {
            if (cur & 1n) inv = inv * k % mod;
            k = k * k % mod;
            cur >>= 1n;
        }
        queries[i] = Number(BigInt(M[queries[i][1]]) * inv % mod);
    }
    return queries;
}
