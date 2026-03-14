// 3123 - Find Edges in Shortest Paths

function findAnswer(n, edges) {
    function fn(start) {
        const C = new Uint32Array(n).fill(-1);
        C[start] = 0;
        const pq = new PriorityQueue({ compare: (a, b) => a % k2 - b % k2 });
        pq.enqueue(k2 * start);
        while (pq.size()) {
            const arr = adj[pq.front() / k2 >> 0], w = pq.dequeue() % k2;
            for (let i = 0; i < arr.length; i++) {
                const v = arr[i] / k1 >> 0, next = arr[i] % k1 + w;
                if (next >= C[v]) continue;
                C[v] = next;
                pq.enqueue(k2 * v + next);
            }
        }
        return C;
    }
    const M = edges, k1 = 1e6, k2 = 1e10;
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < M.length; i++) {
        const u = M[i][0], v = M[i][1], w = M[i][2];
        adj[u].push(k1 * v + w);
        adj[v].push(k1 * u + w);
    }
    const C1 = fn(0), tgt = C1[n - 1];
    if (tgt === 4294967295) return M.fill(false);
    const C2 = fn(n - 1);
    for (let i = 0; i < M.length; i++) {
        const u = M[i][0], v = M[i][1], d = tgt - M[i][2];
        M[i] = C1[u] + C2[v] === d || C1[v] + C2[u] === d;
    }
    return M;
}
