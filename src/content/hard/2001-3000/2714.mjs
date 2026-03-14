// 2714 - Find Shortest Path With K Hops

function shortestPathWithHops(n, edges, s, d, k) {
    const adj = Array.from({ length: n }, () => []);
    edges.forEach(e => adj[e[0]].push([e[1], e[2]]));
    edges.forEach(e => adj[e[1]].push([e[0], e[2]]));
    const C = Array.from({ length: n }, () => new Uint32Array(k + 1).fill(-1));
    C[s][k] = 0;
    const pq = new PriorityQueue((a, b) => a[2] - b[2]);
    pq.enqueue([s, k, 0]);
    while (true) {
        const u = pq.front()[0], cur = pq.front()[1], w = pq.dequeue()[2];
        if (u === d) return w;
        const arr = adj[u];
        for (let i = 0; i < arr.length; i++) {
            const v = arr[i][0], next = w + arr[i][1];
            if (next < C[v][cur]) {
                C[v][cur] = next;
                pq.enqueue([v, cur, next]);
            }
            if (cur && w < C[v][cur - 1]) {
                C[v][cur - 1] = w;
                pq.enqueue([v, cur - 1, w]);
            }
        }
    }
}
