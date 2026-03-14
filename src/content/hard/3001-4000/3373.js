// 3373 - Maximize the Number of Target Nodes After Connecting Trees II

function maxTargetNodes(edges1, edges2) {
    function dfs(node, acc) {
        const next = adj[node];
        adj[node] = false;
        if (acc % 2 && ++odd && acc > 10000) adj[node] = 0;
        for (let i = 0; i < next.length; i++) {
            if (adj[next[i]]) dfs(next[i], acc + 1);
        }
    }
    const m = edges2.length + 1, n = edges1.length + 1;
    let adj = Array.from({ length: m }, () => []);
    for (let i = 0; i < edges2.length; i++) {
        adj[edges2[i][0]].push(edges2[i][1]);
        adj[edges2[i][1]].push(edges2[i][0]);
    }
    let odd = 0;
    dfs(0, 0);
    const max = Math.max(odd, m - odd);
    adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges1.length; i++) {
        adj[edges1[i][0]].push(edges1[i][1]);
        adj[edges1[i][1]].push(edges1[i][0]);
    }
    odd = 0;
    dfs(0, 10000);
    const even = n - odd;
    for (let i = 0; i < n; i++) {
        adj[i] = (adj[i] === 0 ? odd : even) + max;
    }
    return adj;
}
