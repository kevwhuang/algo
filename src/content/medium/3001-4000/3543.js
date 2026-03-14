// 3543 - Maximum Weighted K-Edge Path

function maxWeight(n, edges, k, t) {
    if (k === 0) return 0;
    if (k >= n || k >= t) return -1;
    let dp = Array.from({ length: n }, () => new Set([0]));
    let N = Array.from({ length: n }, () => new Set());
    while (k--) {
        let cur, i = -1;
        while (++i < edges.length) {
            const set = dp[edges[i][0]];
            for (const e of set) {
                const next = e + edges[i][2];
                if (next >= t) continue;
                N[edges[i][1]].add(next);
                cur = dp;
            }
        }
        if (!cur) return -1;
        dp = N, N = cur;
        N.forEach(e => e.clear());
    }
    return dp.reduce((s, e) => Math.max(...e, s), 0);
}
