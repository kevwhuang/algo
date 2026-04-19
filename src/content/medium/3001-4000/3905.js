// 3905. Multi Source Flood Fill

function colorGrid(n, m, sources) {
    if (!this.A) A = new Uint32Array(100000);
    [n, m] = [m, n];
    A.fill(0, 0, m * n);
    let Q = new Set();
    for (let i = 0; i < sources.length; i++) {
        const id = n * sources[i][0] + sources[i][1];
        A[id] = sources[i][2];
        Q.add(id);
    }
    while (Q.size) {
        const N = new Set();
        for (const id of Q) {
            const a = id - n, b = id + n, c = id - 1, d = id + 1, cur = A[id];
            if (N.has(a)) A[a] = Math.max(cur, A[a]);
            else if (a >= 0 && A[a] < 1) A[a] = cur, N.add(a);
            if (N.has(b)) A[b] = Math.max(cur, A[b]);
            else if (b < m * n && A[b] < 1) A[b] = cur, N.add(b);
            if (id % n && N.has(c)) A[c] = Math.max(cur, A[c]);
            else if (id % n && A[c] < 1) A[c] = cur, N.add(c);
            if (d % n && N.has(d)) A[d] = Math.max(cur, A[d]);
            else if (d % n && A[d] < 1) A[d] = cur, N.add(d);
        }
        Q = N;
    }
    const M = Array.from({ length: m }, () => new Uint32Array(n));
    for (let i = 0; i < m * n; i++) {
        M[i / n >> 0][i % n] = A[i];
    }
    return M;
}
