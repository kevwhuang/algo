// 2421 - Number of Good Paths

function numberOfGoodPaths(vals, edges) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const max = Math.max, M = edges, A = vals, n = A.length, nn = n - 1;
    const uf = Array.from({ length: n }, (_, v) => v);
    M.sort((a, b) => max(A[a[0]], A[a[1]]) - max(A[b[0]], A[b[1]]));
    let res = 0, i = 0;
    while (i < nn) {
        const set = new Set(), map = new Map();
        const tgt = max(A[M[i][0]], A[M[i][1]]);
        while (i < nn) {
            const u = M[i][0], v = M[i][1], cur = max(A[u], A[v]);
            if (cur !== tgt) break;
            if (cur === A[u]) set.add(u);
            if (cur === A[v]) set.add(v);
            uf[find(u)] = find(v), i++;
        }
        set.forEach(v => map.set(find(v), (map.get(uf[v]) ?? 0) + 1));
        map.values().forEach(e => res += e * (e - 1));
    }
    return res / 2 + n;
}
