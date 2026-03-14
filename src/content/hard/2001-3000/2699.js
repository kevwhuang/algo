// 2699 - Modify Graph Edge Weights

function modifiedGraphEdges(n, edges, source, destination, target) {
    function check() {
        C.fill(-1)[source] = 0;
        const pq = new PriorityQueue((a, b) => a[1] - b[1]);
        pq.enqueue([source, 0]);
        while (pq.size()) {
            const u = pq.front()[0], w = pq.dequeue()[1], arr = adj[u];
            if (u === destination) return w;
            for (let i = 0; i < arr.length; i++) {
                const v = arr[i][0], next = w + arr[i][1];
                if (next > target || next >= C[v]) continue;
                C[v] = next;
                pq.enqueue([v, next]);
            }
        }
        return Infinity;
    }
    const adj = Array.from({ length: n }, () => []);
    edges.forEach(e => ~e[2] && adj[e[0]].push([e[1], e[2]]));
    edges.forEach(e => ~e[2] && adj[e[1]].push([e[0], e[2]]));
    const C = new Uint32Array(n), cur = check();
    if (cur < target) return [];
    if (cur === target) edges.forEach(e => ~e[2] || (e[2] = 2e9));
    if (cur === target) return edges;
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1], w = edges[i][2];
        if (~w) continue;
        edges[i][2] = 1;
        adj[u].push([v, 1]);
        adj[v].push([u, 1]);
        const cur = check();
        if (cur > target) continue;
        edges[i][2] += target - cur;
        edges.forEach(e => ~e[2] || (e[2] = 2e9));
        return edges;
    }
    return [];
}
