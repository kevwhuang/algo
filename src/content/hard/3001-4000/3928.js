// 3928. Minimum Cost to Buy Apples II

function minCost(n, prices, roads) {
    function fn(u, j, C) {
        C.fill(prices[u], 0, n + 1).fill(0, u, u + 1);
        const pq = new PriorityQueue((a, b) => a[1] - b[1]);
        pq.enqueue([u, 0]);
        while (pq.size()) {
            const A = adj[pq.front()[0]], w = pq.dequeue()[1];
            for (let i = 0; i < A.length; i++) {
                const v = A[i][0], next = w + A[i][j];
                if (next >= C[v]) continue;
                C[v] = next;
                pq.enqueue([v, next]);
            }
        }
    }
    if (!this.C1) C1 = new Array(1000), C2 = new Array(1000);
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < roads.length; i++) {
        const u = roads[i][0], v = roads[i][1];
        const w = roads[i][2], k = roads[i][3];
        adj[u].push([v, w, k * w]);
        adj[v].push([u, w, k * w]);
    }
    const res = new Uint32Array(n);
    for (let u = 0; u < n; u++) {
        fn(u, 1, C1);
        fn(u, 2, C2);
        let min = Infinity;
        for (let v = 0; v < n; v++) {
            min = Math.min(prices[v] + C1[v] + C2[v], min);
        }
        res[u] = min;
    }
    return res;
}
