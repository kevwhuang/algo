// 3604 - Minimum Time to Reach Destination in Directed Graph

function minTime(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    edges.forEach(e => adj[e[0]].push(e));
    const C = new Uint32Array(n).fill(-1);
    C[0] = 0;
    const pq = new PriorityQueue((a, b) => a[1] - b[1]);
    pq.enqueue([0, 0]);
    while (pq.size()) {
        const u = pq.front()[0], w = pq.dequeue()[1], arr = adj[u];
        if (u === n - 1) return w;
        for (let i = 0; i < arr.length; i++) {
            if (w > arr[i][3]) continue;
            const v = arr[i][1], next = Math.max(arr[i][2], w) + 1;
            if (next >= C[v]) continue;
            C[v] = next;
            pq.enqueue([v, next]);
        }
    }
    return -1;
}
