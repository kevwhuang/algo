// 2316 - Count Unreachable Pairs of Nodes in an Undirected Graph

function countPairs(n, edges) {
    function union(n1, n2) {
        const p1 = find(n1);
        const p2 = find(n2);
        if (p1 === p2) return;
        if (rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            parent[p1] = p2;
            rank[p2] += rank[p1];
        }
    }
    function find(n) {
        while (n !== parent[n]) n = parent[n];
        return n;
    }
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array.from({ length: n }, () => 1);
    for (let i = 0; i < edges.length; i++) {
        union(edges[i][0], edges[i][1]);
    }
    let unreachable = 0;
    for (let i = 0, seen = 0; i < n; i++) {
        if (parent[i] !== i) continue;
        unreachable += rank[i] * seen;
        seen += rank[i];
    }
    return unreachable;
}
