// 3820 - Pythagorean Distance Nodes in a Tree

function specialNodes(n, edges, x, y, z) {
    function fn(k) {
        const C = new Uint32Array(n);
        let acc = 1, Q = [k];
        while (Q.length) {
            const N = [];
            for (let i = 0; i < Q.length; i++) {
                const A = adj[Q[i]];
                for (let j = 0; j < A.length; j++) {
                    const v = A[j];
                    if (C[v] < 1) C[v] = acc, N[N.length] = v;
                }
            }
            acc++, Q = N;
        }
        C[k] = 0;
        return C;
    }
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        adj[u].push(v);
        adj[v].push(u);
    }
    let res = 0;
    const C1 = fn(x), C2 = fn(y), C3 = fn(z);
    for (let v = 0; v < n; v++) {
        const a = Math.min(C1[v], C2[v], C3[v]);
        const b = Math.max(C1[v], C2[v], C3[v]);
        const c = C1[v] + C2[v] + C3[v] - a - b;
        if (a * a === b * b - c * c) res++;
    }
    return res;
}
