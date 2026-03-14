// 3528 - Unit Conversion I

function baseUnitConversions(conversions) {
    const n = conversions.length;
    const res = new Uint32Array(n + 1);
    res[0] = 1;
    const adj = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < n; i++) {
        adj[conversions[i][0]].push(i);
    }
    let Q = [0];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const u = Q[i], arr = adj[u];
            for (let j = 0; j < arr.length; j++) {
                const v = conversions[arr[j]][1];
                const prod = BigInt(res[u]) * BigInt(conversions[arr[j]][2]);
                res[v] = Number(prod % 1000000007n);
                N.push(v);
            }
        }
        Q = N;
    }
    return res;
}
