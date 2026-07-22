// 3970. Shortest Path With at Most K Consecutive Identical Characters

function shortestPath(n, edges, labels, k) {
    if (!this.C) C = new Uint32Array(2500001);
    C.fill(-1, 1, k * n + 1).fill(0, 1, 2);
    const adj = Array.from({ length: n }, () => []);
    edges.forEach(e => adj[e[0]].push(e));
    const pq = new PriorityQueue((a, b) => a[1] - b[1]);
    pq.enqueue([0, 0, 1]);
    while (pq.size()) {
        const cur = pq.dequeue(), u = cur[0], w = cur[1], acc = cur[2];
        if (u === n - 1) return w;
        const M = adj[u], s = labels[u];
        for (let i = 0; i < M.length; i++) {
            const v = M[i][1], next1 = w + M[i][2];
            const next2 = labels[v] === s ? acc + 1 : 1;
            if (next1 >= C[k * v + next2] || next2 > k) continue;
            C[k * v + next2] = next1;
            pq.enqueue([v, next1, next2]);
        }
    }
    return -1;
}
