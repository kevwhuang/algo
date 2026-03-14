// 882 - Reachable Nodes in Subdivided Graph

function reachableNodes(edges, maxMoves, n) {
    const adj = Array.from({ length: n }, () => []);
    edges.forEach(e => adj[e[0]].push([e[1], e[2] + 1]));
    edges.forEach(e => adj[e[1]].push([e[0], e[2] + 1]));
    const pq = new PriorityQueue((a, b) => a[1] - b[1]);
    pq.enqueue([0, 0]);
    const C = { 0: 0 };
    let res = 1;
    while (pq.size()) {
        const arr = adj[pq.front()[0]], w = pq.dequeue()[1];
        for (let i = 0; i < arr.length; i++) {
            const v = arr[i][0], next = w + arr[i][1];
            if (next > maxMoves || next >= C[v]) continue;
            if (!C[v]) res++;
            C[v] = next;
            pq.enqueue([v, next]);
        }
    }
    for (let i = 0; i < edges.length; i++) {
        const a = maxMoves - C[edges[i][0]] || 0;
        const b = maxMoves - C[edges[i][1]] || 0;
        res += a + b - Math.max(0, a + b - edges[i][2]);
    }
    return res;
}
