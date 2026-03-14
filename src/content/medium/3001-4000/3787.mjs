// 3787 - Find Diameter Endpoints of a Tree

function findSpecialNodes(n, edges) {
    function fn(Q) {
        seen.fill(0, 0, n).fill(1, Q[0], Q[0] + 1);
        while (true) {
            const N = [];
            for (let i = 0; i < Q.length; i++) {
                const A = adj[Q[i]];
                for (let j = 0; j < A.length; j++) {
                    const v = A[j];
                    if (seen[v]) continue;
                    seen[v] = 1;
                    N.push(v);
                }
            }
            if (N.length === 0) break;
            Q = N;
        }
        Q.forEach(e => set.add(e));
    }
    if (!this.seen) seen = new Uint8Array(100000);
    const adj = Array.from({ length: n }, () => []);
    edges.forEach(e => adj[e[0]].push(e[1]) && adj[e[1]].push(e[0]));
    const set = new Set();
    fn([0]);
    fn([set.values().next().value]);
    let res = '';
    for (let v = 0; v < n; v++) {
        res += set.has(v) ? '1' : '0';
    }
    return res;
}
