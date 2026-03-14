// 2065 - Maximum Path Quality of a Graph

function maximalPathQuality(values, edges, maxTime) {
    function backtrack(node, acc1, acc2) {
        if (node === 0 && acc1 <= maxTime) res = Math.max(acc2, res);
        if (acc1 + 10 > maxTime) return;
        const arr = adj[node];
        for (let i = 0; i < arr.length; i++) {
            const v = arr[i][0];
            if (seen[v]) backtrack(v, acc1 + arr[i][1], acc2);
            if (seen[v]) continue;
            seen[v] = 1;
            backtrack(v, acc1 + arr[i][1], acc2 + values[v]);
            seen[v] = 0;
        }
    }
    const adj = Array.from({ length: values.length }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1], w = edges[i][2];
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }
    let res = 0;
    const seen = new Uint8Array(values.length);
    seen[0] = 1;
    backtrack(0, 0, values[0]);
    return res;
}
