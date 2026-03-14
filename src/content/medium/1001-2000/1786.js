// 1786 - Number of Restricted Paths From First to Last Node

function countRestrictedPaths(n, edges) {
    const adj1 = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1], w = edges[i][2];
        adj1[u].push([v, w]);
        adj1[v].push([u, w]);
    }
    const C = new Uint32Array(n + 1).fill(-1);
    C[n] = 0;
    const pq = new PriorityQueue((a, b) => a[1] - b[1]);
    pq.enqueue([n, 0]);
    while (pq.size()) {
        const arr = adj1[pq.front()[0]], w = pq.dequeue()[1];
        for (let i = 0; i < arr.length; i++) {
            const v = arr[i][0], next = arr[i][1] + w;
            if (next >= C[v]) continue;
            C[v] = next;
            pq.enqueue([v, next]);
        }
    }
    const adj2 = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        if (C[u] > C[v]) adj2[u].push(v);
        if (C[u] < C[v]) adj2[v].push(u);
    }
    const Q = Array.from({ length: n + 1 }, (_, i) => i);
    Q.sort((a, b) => C[b] - C[a]);
    const dp = new Uint32Array(n + 1);
    dp[1] = 1;
    for (let i = 0; i < Q.length; i++) {
        const arr = adj2[Q[i]], cur = dp[Q[i]];
        for (let j = 0; j < arr.length; j++) {
            dp[arr[j]] = (dp[arr[j]] + cur) % 1000000007;
        }
    }
    return dp[n];
}
